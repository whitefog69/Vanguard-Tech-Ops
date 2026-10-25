import nodemailer from 'nodemailer';

// NOTE: No dotenv import — Vercel injects environment variables automatically

/**
 * Escapes HTML-significant characters so user-supplied values can be safely
 * embedded in an HTML email body without allowing markup/script injection.
 */
export function escapeHtml(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const transporter = nodemailer.createTransport({
  host: 'smtppro.zoho.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.ZOHO_USER,
    // Accept either name so the function works regardless of how the secret is
    // labelled in the Vercel dashboard. Standardize on ZOHO_APP_PASSWORD.
    pass: process.env.ZOHO_APP_PASSWORD || process.env.ZOHO_PASS,
  },
});

/**
 * Sends an email using the configured Zoho SMTP client.
 *
 * @param recipient - The recipient's email address.
 * @param subject   - The email subject line.
 * @param html_body - The HTML content of the email body.
 * @param replyTo   - The user's email address to set in the Reply-To header.
 * @param senderName - The user's name to use in the From display name.
 */
export async function trigger_automation_email(
  recipient: string,
  subject: string,
  html_body: string,
  replyTo?: string,
  senderName?: string
): Promise<{ success: boolean; messageId?: string; error?: string }> {
  try {
    const info = await transporter.sendMail({
      // Object form lets nodemailer encode the display name safely, preventing
      // header injection via a crafted sender name.
      from: {
        name: `${senderName ?? 'Visitor'} via VanguardTechOps`,
        address: process.env.ZOHO_USER ?? '',
      },
      replyTo: replyTo || undefined,
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

/**
 * Sends an automatic confirmation email to the user.
 */
export async function send_user_confirmation(
  userEmail: string,
  userName: string,
  service: string,
  message: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const info = await transporter.sendMail({
      from: `"VanguardTechOps" <${process.env.ZOHO_NOREPLY_EMAIL || process.env.ZOHO_USER}>`,
      to: userEmail,
      subject: `We received your inquiry, ${userName}!`,
      html: `
        <p>Hi ${escapeHtml(userName)},</p>
        <p>Thank you for reaching out to VanguardTechOps. We have received your inquiry regarding <strong>${escapeHtml(service)}</strong> and will get back to you within 24-48 hours.</p>
        <p>Here's a summary of what you submitted:</p>
        <ul>
          <li><strong>Service:</strong> ${escapeHtml(service)}</li>
          <li><strong>Message:</strong> ${escapeHtml(message).replace(/\n/g, '<br>')}</li>
        </ul>
        <p>Best regards,<br/>VanguardTechOps Team</p>
        <p style="font-size:11px;color:gray;">This is an automated confirmation, please do not reply to this email.</p>
      `,
    });
    console.log(`[Email] Confirmation sent to ${userEmail}: ${info.messageId}`);
    return { success: true };
  } catch (error) {
    console.error(`[Email] Failed to send confirmation to ${userEmail}:`, error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}
