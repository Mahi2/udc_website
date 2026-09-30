import { createServerFn } from "@tanstack/react-start";

import {
  donationMethodLabels,
  donationSchema,
  formatAmount,
  mobileMoneyOperators,
  type DonationInput,
} from "./donation-schema";

function buildReference() {
  const random = Math.random().toString(36).slice(2, 8).toUpperCase();
  const stamp = new Date().toISOString().slice(2, 10).replace(/-/g, "");
  return `UDS-${stamp}-${random}`;
}

function normalizePhone(phone: string | undefined) {
  if (!phone) return null;
  const digits = phone.replace(/[^\d+]/g, "");
  return digits || null;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export type DonationResult = {
  reference: string;
  status: "pending";
  notified: boolean;
};

export const createDonation = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => donationSchema.parse(input) as DonationInput)
  .handler(async ({ data }): Promise<DonationResult> => {
    const reference = buildReference();
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error: insertError } = await supabaseAdmin.from("donations").insert({
      reference,
      amount: data.amount,
      currency: data.currency,
      method: data.method,
      operator: data.operator || null,
      phone: normalizePhone(data.phone),
      donor_name: data.donorName || null,
      donor_email: data.donorEmail || null,
      message: data.message || null,
      is_anonymous: data.isAnonymous,
      status: "pending",
      provider: "pledge",
    });

    if (insertError) {
      console.error("donation insert failed", insertError);
      throw new Error("Impossible d'enregistrer le don");
    }

    const operatorLabel =
      mobileMoneyOperators.find((op) => op.value === data.operator)?.label ?? data.operator;

    const rows: Array<[string, string]> = [
      ["Référence", reference],
      ["Montant", formatAmount(data.amount, data.currency)],
      ["Mode de paiement", donationMethodLabels[data.method]],
    ];
    if (data.method === "mobile_money") {
      rows.push(["Opérateur", operatorLabel || "—"]);
      rows.push(["Numéro mobile money", normalizePhone(data.phone) ?? "—"]);
    }
    rows.push(["Donateur", data.isAnonymous ? "Anonyme" : data.donorName || "Non renseigné"]);
    rows.push(["Email", data.donorEmail || "Non renseigné"]);
    if (data.message) rows.push(["Message", data.message]);

    const htmlRows = rows
      .map(
        ([label, value]) =>
          `<tr><td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600;color:#374151;white-space:nowrap">${escapeHtml(label)}</td><td style="padding:8px 12px;border:1px solid #e5e7eb;color:#111827">${escapeHtml(value)}</td></tr>`,
      )
      .join("");

    const html = `
      <h2 style="margin:0 0 4px;color:#111827">Nouvelle promesse de don — Ukamili Digital Summit 2026</h2>
      <p style="margin:0 0 16px;color:#6b7280">Le donateur finalise le paiement de son côté (mobile money ou virement). Merci de le recontacter pour confirmer la réception.</p>
      <table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">${htmlRows}</table>
    `;

    const text = [
      "Nouvelle promesse de don — Ukamili Digital Summit 2026",
      "",
      ...rows.map(([label, value]) => `${label} : ${value}`),
    ].join("\n");

    const { sendNotificationEmail } = await import("./summit-notify.server");
    const notified = await sendNotificationEmail({
      to: "contact@ukamili.africa",
      ...(data.donorEmail ? { replyTo: data.donorEmail } : {}),
      subject: `[Summit 2026] Promesse de don — ${formatAmount(data.amount, data.currency)} (${reference})`,
      html,
      text,
    });

    return { reference, status: "pending", notified };
  });
