/** Envoi direct via Resend, sans dépendre du connecteur email du workspace. */
export async function sendNotificationEmail(params: {
  to: string;
  replyTo?: string;
  subject: string;
  html: string;
  text: string;
}): Promise<boolean> {
  const resendKey = process.env["RESEND_API_KEY"];

  if (!resendKey) {
    console.warn("Email notification skipped: RESEND_API_KEY is not configured");
    return false;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${resendKey}`,
    },
    body: JSON.stringify({
      from: "Ukamili Digital Summit <summit@ukamili.africa>",
      to: [params.to],
      ...(params.replyTo ? { reply_to: params.replyTo } : {}),
      subject: params.subject,
      html: params.html,
      text: params.text,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    console.error(`Email notification failed [${response.status}]: ${body}`);
    return false;
  }

  return true;
}
