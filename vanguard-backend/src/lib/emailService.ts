import nodemailer from 'nodemailer';

// NOTE: No dotenv import — Vercel injects environment variables automatically

const transporter = nodemailer.createTransport({
  host: 'smtppro.zoho.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.ZOHO_USER,
    pass: process.env.ZOHO_APP_PASSWORD, // Updated to use the requested ZOHO_APP_PASSWORD
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
      from: `"${senderName} via VanguardTechOps" <${process.env.ZOHO_USER}>`,
      replyTo: `${replyTo}`,
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
      from: `"VanguardTechOps" <${process.env.ZOHO_NOREPLY_EMAIL}>`,
      to: userEmail,
      subject: `We received your inquiry, ${userName}!`,
      html: `
        <p>Hi ${userName},</p>
        <p>Thank you for reaching out to VanguardTechOps. We have received your inquiry regarding <strong>${service}</strong> and will get back to you within 24-48 hours.</p>
        <p>Here's a summary of what you submitted:</p>
        <ul>
          <li><strong>Service:</strong> ${service}</li>
          <li><strong>Message:</strong> ${message}</li>
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
