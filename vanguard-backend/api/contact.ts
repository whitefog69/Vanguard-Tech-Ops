import type { VercelRequest, VercelResponse } from '@vercel/node';
import { trigger_automation_email } from '../src/lib/emailService';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const allowedOrigins = ['https://whitefog69.github.io', 'https://vanguardtechops.com'];
  const origin = req.headers.origin;
  
  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, service, message } = req.body ?? {};

  if (!name || !email || !service || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
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
    return res.status(200).json({ message: 'Email sent successfully' });
  }

  return res.status(500).json({ error: result.error });
}
