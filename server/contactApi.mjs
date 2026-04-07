import "./loadEnv.mjs";
import express from "express";
import sendEmail from "./sendEmail.mjs";

const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || "").trim());

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Mount at `/api` → POST `/api/contact` */
export function getContactRouter() {
  const router = express.Router();
  router.use(express.json({ limit: "48kb" }));

  router.post("/contact", async (req, res) => {
    try {
      const name = String(req.body?.name ?? "").trim().slice(0, 200);
      const email = String(req.body?.email ?? "").trim().slice(0, 320);
      const venue = String(req.body?.venue ?? "").trim().slice(0, 200);
      const phone = String(req.body?.phone ?? "").trim().slice(0, 50);
      const city = String(req.body?.city ?? "").trim().slice(0, 100);
      const message = String(req.body?.message ?? "").trim().slice(0, 8000);

      if (!name || !email || !venue) {
        return res.status(400).json({ ok: false, error: "Name, email, and venue are required." });
      }
      if (!emailOk(email)) {
        return res.status(400).json({ ok: false, error: "Please enter a valid email address." });
      }

      const host = process.env.SMTP_HOST;
      const smtpMail = process.env.SMTP_MAIL;
      const smtpPassword = String(process.env.SMTP_PASSWORD ?? "").replace(/\s+/g, "");
      const receiver =
        (process.env.RECEIVER_EMAIL || "").trim() ||
        (process.env.MAIL_TO || "").trim() ||
        smtpMail;

      if (!host || !smtpMail || !smtpPassword || !receiver) {
        console.error("[contact] Set SMTP_HOST, SMTP_MAIL, SMTP_PASSWORD, and RECEIVER_EMAIL (or MAIL_TO) in .env");
        return res.status(503).json({
          ok: false,
          error: "Email is not configured on the server.",
        });
      }

      const emailHref = `mailto:${encodeURIComponent(email)}`;
      const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>New Wedding Venue POS Contact</title>
        </head>
        <body style="margin:0;padding:0;background-color:#f6f3ef;color:#2b2b2b;font-family:Inter,system-ui,sans-serif;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f6f3ef;padding:32px 16px;">
            <tr>
              <td align="center">
                <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:24px;overflow:hidden;box-shadow:0 24px 72px rgba(43,40,65,0.08);border:1px solid rgba(99,91,255,0.12);">
                  <tr>
                    <td style="background:linear-gradient(135deg, #635bff 0%, #8b79ff 100%);padding:32px 24px 28px;text-align:center;">
                      <h1 style="margin:0;font-family:'Playfair Display',Georgia,serif;font-size:28px;font-weight:700;color:#ffffff;line-height:1.2;">Wedding Venue POS Demo Request</h1>
                      <p style="margin:14px 0 0;font-family:Inter,system-ui,sans-serif;font-size:15px;color:rgba(255,255,255,0.9);line-height:1.7;">A new venue request came in from your landing page contact form.</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:32px 30px 28px;background:#ffffff;">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="padding-bottom:22px;">
                            <div style="font-family:Inter,system-ui,sans-serif;font-size:12px;font-weight:700;color:#635bff;text-transform:uppercase;letter-spacing:0.18em;margin-bottom:8px;">Name</div>
                            <div style="font-family:Inter,system-ui,sans-serif;font-size:16px;color:#1f1f1f;line-height:1.7;">${escapeHtml(name)}</div>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding-bottom:22px;">
                            <div style="font-family:Inter,system-ui,sans-serif;font-size:12px;font-weight:700;color:#635bff;text-transform:uppercase;letter-spacing:0.18em;margin-bottom:8px;">Email</div>
                            <div style="font-family:Inter,system-ui,sans-serif;font-size:16px;line-height:1.7;">
                              <a href="${emailHref}" style="color:#4d7cfe;text-decoration:none;">${escapeHtml(email)}</a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding-bottom:22px;">
                            <div style="font-family:Inter,system-ui,sans-serif;font-size:12px;font-weight:700;color:#635bff;text-transform:uppercase;letter-spacing:0.18em;margin-bottom:8px;">Venue</div>
                            <div style="font-family:Inter,system-ui,sans-serif;font-size:16px;color:#1f1f1f;line-height:1.7;">${escapeHtml(venue)}</div>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding-bottom:22px;">
                            <div style="font-family:Inter,system-ui,sans-serif;font-size:12px;font-weight:700;color:#635bff;text-transform:uppercase;letter-spacing:0.18em;margin-bottom:8px;">Phone</div>
                            <div style="font-family:Inter,system-ui,sans-serif;font-size:16px;color:#1f1f1f;line-height:1.7;">${escapeHtml(phone || "Not provided")}</div>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding-bottom:22px;">
                            <div style="font-family:Inter,system-ui,sans-serif;font-size:12px;font-weight:700;color:#635bff;text-transform:uppercase;letter-spacing:0.18em;margin-bottom:8px;">City</div>
                            <div style="font-family:Inter,system-ui,sans-serif;font-size:16px;color:#1f1f1f;line-height:1.7;">${escapeHtml(city || "Not provided")}</div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div style="font-family:Inter,system-ui,sans-serif;font-size:12px;font-weight:700;color:#635bff;text-transform:uppercase;letter-spacing:0.18em;margin-bottom:10px;">Message</div>
                            <div style="background-color:#f4f1ff;border-radius:18px;padding:18px 20px;font-family:Inter,system-ui,sans-serif;font-size:15px;color:#2b2b2b;line-height:1.8;white-space:pre-wrap;">${escapeHtml(message || "No message provided.")}</div>
                          </td>
                        </tr>
                      </table>
                      <div style="margin-top:28px;padding:20px;border-radius:18px;background:linear-gradient(135deg, rgba(99,91,255,0.12), rgba(255,193,79,0.15));font-family:Inter,system-ui,sans-serif;font-size:14px;color:#40394f;line-height:1.75;border:1px solid rgba(99,91,255,0.18);">
                        <strong style="display:block;margin-bottom:8px;color:#4b32ff;">Action needed</strong>
                        Please review this demo request and respond to the customer from your dashboard as soon as possible.
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style="background-color:#f5f3f8;padding:24px;text-align:center;border-radius:0 0 24px 24px;">
                      <p style="margin:0;font-family:Inter,system-ui,sans-serif;font-size:13px;line-height:1.65;color:#7a7288;">Sent from your Wedding Venue POS contact form.</p>
                      <p style="margin:8px 0 0;font-family:Inter,system-ui,sans-serif;font-size:13px;line-height:1.65;color:#7a7288;">Powered by your configured SMTP settings.</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `;

      await sendEmail({
        email: receiver,
        subject: `[Wedding Venue POS] Message from ${name}`,
        message: html,
        replyTo: email,
      });

      return res.json({ ok: true });
    } catch (err) {
      console.error("[contact]", err);
      return res.status(500).json({ ok: false, error: "Could not send message. Please try again later." });
    }
  });

  return router;
}
