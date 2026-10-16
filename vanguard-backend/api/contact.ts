import type { VercelRequest, VercelResponse } from '@vercel/node';
import { trigger_automation_email, send_user_confirmation } from '../src/lib/emailService';

// Simple validator for email format
const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Checks the Cloudflare Turnstile token the contact form sends, so bots can't post inquiries directly.
const verifyCaptcha = async (token: string, ip?: string) => {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.error('TURNSTILE_SECRET_KEY is not set; rejecting inquiry');
    return false;
  }

  const body = new URLSearchParams({ secret, response: token });
  if (ip) body.append('remoteip', ip);

  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body,
    });
    const data = (await response.json()) as { success: boolean };
    return data.success === true;
  } catch (error) {
    console.error('Captcha verification failed:', error);
    return false;
  }
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const allowedOrigins = ['https://whitefog69.github.io', 'https://vanguardtechops.com'];
  const origin = req.headers.origin;
  
  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  } else {
    // Fallback if origin is not in list but we need to pass preflight
    res.setHeader('Access-Control-Allow-Origin', '*'); 
  }

  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, service, message, captchaToken } = req.body ?? {};

  if (!name || !email || !service || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const forwardedFor = req.headers['x-forwarded-for'];
  const ip = (Array.isArray(forwardedFor) ? forwardedFor[0] : forwardedFor)?.split(',')[0].trim();
  if (typeof captchaToken !== 'string' || !captchaToken || !(await verifyCaptcha(captchaToken, ip))) {
    return res.status(403).json({ error: 'Captcha verification failed' });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  const result = await trigger_automation_email(
    process.env.MAIL_TO ?? 'contact@vanguardtechops.com',
    `New Inquiry from ${name}: ${service}`,
    `
      <div style="max-width:600px;margin:0 auto;font-family:sans-serif;color:#333">
        <h2 style="color:#000;border-bottom:1px solid #eee;padding-bottom:10px">
          New Website Inquiry
        </h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Reply-to Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <div style="background:#f9f9f9;padding:15px;border-radius:4px;border:1px solid #eee">
          ${message.replace(/\n/g, '<br>')}
        </div>
        <hr style="border:0;border-top:1px solid #eee;margin:20px 0" />
        <p style="font-size:12px;color:#999">Sent from vanguardtechops.com inquiry portal.</p>
      </div>
    `,
    email,
    name
  );

  if (result.success) {
    // Send confirmation to user
    await send_user_confirmation(email, name, service, message);
    return res.status(200).json({ message: 'Email sent successfully' });
  }

  return res.status(500).json({ error: result.error });
}
