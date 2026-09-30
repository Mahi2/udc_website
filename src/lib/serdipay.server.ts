/**
 * Adaptateur SerdiPay (https://serdipay.com) — paiements mobile money en RDC.
 *
 * SerdiPay ne publie pas sa documentation publiquement : les identifiants
 * marchands (clé API, identifiant marchand, URL de l'API) sont transmis après
 * ouverture du compte. Tant que ces variables ne sont pas configurées,
 * `initiateSerdiPayPayment` renvoie `configured: false` : le don est tout de
 * même enregistré en base et rien n'est perdu.
 *
 * Variables attendues :
 *  - SERDIPAY_API_URL      (ex. https://api.serdipay.com/v1)
 *  - SERDIPAY_API_KEY
 *  - SERDIPAY_MERCHANT_ID
 *  - SERDIPAY_WEBHOOK_SECRET (pour /api/public/serdipay-webhook)
 */

export type SerdiPayInitiateParams = {
  reference: string;
  amount: number;
  currency: "USD" | "CDF";
  method: "mobile_money" | "card";
  operator?: string | undefined;
  phone?: string | undefined;
  description: string;
  callbackUrl: string;
  returnUrl: string;
  customerName?: string | undefined;
  customerEmail?: string | undefined;
};

export type SerdiPayInitiateResult =
  | { configured: false }
  | {
      configured: true;
      ok: true;
      providerReference?: string | undefined;
      checkoutUrl?: string | undefined;
      raw: unknown;
    }
  | { configured: true; ok: false; error: string; raw?: unknown };

function readConfig() {
  const apiUrl = process.env["SERDIPAY_API_URL"];
  const apiKey = process.env["SERDIPAY_API_KEY"];
  const merchantId = process.env["SERDIPAY_MERCHANT_ID"];
  if (!apiUrl || !apiKey || !merchantId) return null;
  return { apiUrl: apiUrl.replace(/\/$/, ""), apiKey, merchantId };
}

export function isSerdiPayConfigured() {
  return readConfig() !== null;
}

export async function initiateSerdiPayPayment(
  params: SerdiPayInitiateParams,
): Promise<SerdiPayInitiateResult> {
  const config = readConfig();
  if (!config) return { configured: false };

  const payload = {
    merchant_id: config.merchantId,
    reference: params.reference,
    amount: params.amount,
    currency: params.currency,
    channel: params.method === "card" ? "card" : "mobile_money",
    operator: params.operator,
    phone: params.phone,
    description: params.description,
    callback_url: params.callbackUrl,
    return_url: params.returnUrl,
    customer: {
      name: params.customerName,
      email: params.customerEmail,
    },
  };

  try {
    const response = await fetch(`${config.apiUrl}/payments`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        authorization: `Bearer ${config.apiKey}`,
        "x-api-key": config.apiKey,
      },
      body: JSON.stringify(payload),
    });

    const raw = await response.json().catch(() => null);

    if (!response.ok) {
      return {
        configured: true,
        ok: false,
        error:
          (raw as { message?: string } | null)?.message ??
          `SerdiPay a répondu avec le statut ${response.status}`,
        raw,
      };
    }

    const data = (raw ?? {}) as Record<string, unknown>;
    const nested = (data["data"] ?? {}) as Record<string, unknown>;
    const providerReference =
      (data["transaction_id"] as string | undefined) ??
      (data["id"] as string | undefined) ??
      (nested["transaction_id"] as string | undefined) ??
      (nested["id"] as string | undefined);
    const checkoutUrl =
      (data["payment_url"] as string | undefined) ??
      (data["checkout_url"] as string | undefined) ??
      (nested["payment_url"] as string | undefined) ??
      (nested["checkout_url"] as string | undefined);

    return { configured: true, ok: true, providerReference, checkoutUrl, raw };
  } catch (error) {
    return {
      configured: true,
      ok: false,
      error: error instanceof Error ? error.message : "Erreur réseau SerdiPay",
    };
  }
}
