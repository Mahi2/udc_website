import { createFileRoute } from "@tanstack/react-router";

/**
 * Callback SerdiPay : mise à jour du statut d'un don.
 *
 * Sécurité : le secret partagé `SERDIPAY_WEBHOOK_SECRET` est exigé dans
 * l'en-tête `x-serdipay-signature` (ou `x-webhook-secret`). Sans secret
 * configuré, l'endpoint refuse toutes les requêtes.
 */
function mapStatus(raw: unknown): "succeeded" | "failed" | "cancelled" | "initiated" | null {
  const value = String(raw ?? "").toLowerCase();
  if (["success", "successful", "succeeded", "completed", "paid", "1"].includes(value))
    return "succeeded";
  if (["failed", "failure", "error", "declined", "rejected", "0"].includes(value)) return "failed";
  if (["cancelled", "canceled", "expired", "timeout"].includes(value)) return "cancelled";
  if (["pending", "processing", "initiated"].includes(value)) return "initiated";
  return null;
}

function timingSafeEqual(a: string, b: string) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i += 1) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

export const Route = createFileRoute("/api/public/serdipay-webhook")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const secret = process.env["SERDIPAY_WEBHOOK_SECRET"];
        if (!secret) {
          return new Response("Webhook not configured", { status: 503 });
        }

        const provided =
          request.headers.get("x-serdipay-signature") ??
          request.headers.get("x-webhook-secret") ??
          "";
        if (!timingSafeEqual(provided, secret)) {
          return new Response("Invalid signature", { status: 401 });
        }

        let payload: Record<string, unknown>;
        try {
          payload = (await request.json()) as Record<string, unknown>;
        } catch {
          return new Response("Invalid JSON", { status: 400 });
        }

        const nested = (payload["data"] ?? {}) as Record<string, unknown>;
        const reference =
          (payload["reference"] as string | undefined) ??
          (payload["merchant_reference"] as string | undefined) ??
          (nested["reference"] as string | undefined);
        const status = mapStatus(payload["status"] ?? nested["status"]);

        if (!reference || !status) {
          return new Response("Missing reference or status", { status: 400 });
        }

        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        const { error } = await supabaseAdmin
          .from("donations")
          .update({
            status,
            provider_reference:
              (payload["transaction_id"] as string | undefined) ??
              (nested["transaction_id"] as string | undefined) ??
              null,
            provider_payload: payload as never,
          })
          .eq("reference", reference);

        if (error) {
          console.error("serdipay webhook update failed", error);
          return new Response("Update failed", { status: 500 });
        }

        return new Response(JSON.stringify({ received: true }), {
          status: 200,
          headers: { "content-type": "application/json" },
        });
      },
    },
  },
});
