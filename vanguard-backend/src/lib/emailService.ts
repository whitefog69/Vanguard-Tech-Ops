import nodemailer from 'nodemailer';

// NOTE: No dotenv import — Vercel injects environment variables automatically

const transporter = nodemailer.createTransport({
  host: 'smtppro.zoho.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.ZOHO_USER,
    pass: process.env.ZOHO_PASS,
  },
});

/**
 * Sends an email using the configured Zoho SMTP client.
 *
 * @param recipient - The recipient's email address.
 * @param subject   - The email subject line.
 * @param html_body - The HTML content of the email body.
 */
export async function trigger_automation_email(
  recipient: string,
  subject: string,
  html_body: string
): Promise<{ success: boolean; messageId?: string; error?: string }> {
  try {
    const info = await transporter.sendMail({
      from: `"Vanguard Tech Ops" <${process.env.ZOHO_USER}>`,
      to: recipient,
      subject: subject,
      html: html_body,
    });
    console.log(`[Email] Successfully sent: ${info.messageId}`);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error(`[Email] Failed to send to ${recipient}:`, error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}
