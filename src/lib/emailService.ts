import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.ZOHO_SENDER_EMAIL,
    pass: process.env.ZOHO_APP_PASSWORD,
  },
});

/**
 * Sends an email using the configured Zoho SMTP client.
 * 
 * @param recipient - The recipient's email address.
 * @param subject - The email subject.
 * @param html_body - The HTML content of the email.
 */
export async function trigger_automation_email(recipient: string, subject: string, html_body: string) {
  try {
    const info = await transporter.sendMail({
      from: `"Vanguard Tech Ops" <${process.env.ZOHO_SENDER_EMAIL}>`,
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
