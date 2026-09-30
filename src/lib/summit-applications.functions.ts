import { createServerFn } from "@tanstack/react-start";

import {
  summitApplicationSchema,
  trackLabels,
  type SummitApplicationInput,
} from "./summit-application-schema";

const NOTIFICATION_RECIPIENT = "contact@ukamili.africa";

function fieldRows(data: SummitApplicationInput): Array<[string, string]> {
  const rows: Array<[string, string | undefined]> = [
    ["Profil", trackLabels[data.track]],
    ["Organisation", data.organization],
    ["Contact", data.contactName],
    ["Fonction", data.contactRole],
    ["Email", data.email],
    ["Téléphone", data.phone],
    ["Site web", data.website],
    ["Ville / Pays", data.city],
    ["Secteur", data.sector],
    ["Taille de l'équipe", data.teamSize],
    ["Forme d'appui", data.supportType],
    ["Présentation", data.description],
    ["Message", data.message],
  ];
  return rows.filter((row): row is [string, string] => Boolean(row[1] && row[1].trim()));
}

function buildEmail(data: SummitApplicationInput) {
  const rows = fieldRows(data);
  const html = `<div style="font-family:Arial,Helvetica,sans-serif;color:#111827">
    <h2 style="margin:0 0 4px">Nouvelle candidature — Ukamili Digital Summit 2026</h2>
    <p style="margin:0 0 16px;color:#6b7280">${trackLabels[data.track]}</p>
    <table style="border-collapse:collapse;width:100%;max-width:640px">
      ${rows
        .map(
          ([label, value]) =>
            `<tr><td style="padding:8px 12px;border:1px solid #e5e7eb;background:#f9fafb;font-weight:600;width:35%">${label}</td><td style="padding:8px 12px;border:1px solid #e5e7eb;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`,
        )
        .join("")}
    </table>
  </div>`;
  const textBody = rows.map(([label, value]) => `${label}: ${value}`).join("\n");
  return {
    subject: `[Summit 2026] ${trackLabels[data.track]} — ${data.organization}`,
    html,
    text: textBody,
  };
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export const submitSummitApplication = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => summitApplicationSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin.from("summit_applications").insert({
      track: data.track,
      organization: data.organization,
      contact_name: data.contactName,
      contact_role: data.contactRole || null,
      email: data.email,
      phone: data.phone || null,
      website: data.website || null,
      city: data.city || null,
      sector: data.sector || null,
      team_size: data.teamSize || null,
      support_type: data.supportType || null,
      description: data.description,
      message: data.message || null,
    });

    if (error) {
      console.error("summit application insert failed", error);
      throw new Error("Enregistrement impossible pour le moment. Merci de réessayer.");
    }

    const email = buildEmail(data);
    let notified = false;
    try {
      const { sendNotificationEmail } = await import("./summit-notify.server");
      notified = await sendNotificationEmail({
        to: NOTIFICATION_RECIPIENT,
        replyTo: data.email,
        ...email,
      });
    } catch (notifyError) {
      console.error("summit application notification failed", notifyError);
    }

    return { ok: true as const, notified };
  });
