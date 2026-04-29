import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

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
 * Sends an auto-reply confirmation email to the user.
 */
export async function send_user_confirmation(recipientEmail: string, name: string, service: string, message: string) {
  const html_body = `
    <div style="font-family: sans-serif; color: #333; max-width: 600px;">
      <h2>Thank you for contacting Vanguard Tech Ops</h2>
      <p>Hi ${name},</p>
      <p>We have received your inquiry regarding <strong>${service}</strong> and our team is currently reviewing your message.</p>
      <p>We typically respond within 24-48 hours. Here is a summary of what you sent us:</p>
      <blockquote style="background: #f9f9f9; padding: 10px; border-left: 4px solid #6366f1;">
        ${message}
      </blockquote>
      <p>We look forward to connecting with you.</p>
      <br>
      <p>Best regards,<br>The Vanguard Tech Ops Team</p>
    </div>
  `;

  // Use ZOHO_NOREPLY_EMAIL for the auto-reply, fallback to ZOHO_USER if missing
  const fromEmail = process.env.ZOHO_NOREPLY_EMAIL || process.env.ZOHO_USER;

  return await trigger_automation_email(recipientEmail, "We've received your inquiry - Vanguard Tech Ops", html_body, fromEmail);
}

/**
 * Sends an email using the configured Zoho SMTP client.
 * 
 * @param recipient - The recipient's email address.
 * @param subject - The email subject.
 * @param html_body - The HTML content of the email.
 * @param from - Optional custom from address.
 */
export async function trigger_automation_email(recipient: string, subject: string, html_body: string, from?: string) {
  try {
    const info = await transporter.sendMail({
      from: `"Vanguard Tech Ops" <${from || process.env.ZOHO_USER}>`,
      to: recipient,
      subject: subject,
      html: html_body,
    });
    console.log(`Email successfully sent: ${info.messageId}`);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error(`Failed to send email to ${recipient}:`, error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}
