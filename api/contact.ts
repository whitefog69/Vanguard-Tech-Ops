import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, service, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Zoho SMTP Configuration
  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true, // use SSL
    auth: {
      user: process.env.ZOHO_SMTP_USER,
      pass: process.env.ZOHO_SMTP_PASSWORD,
    },
  });

  try {
    const mailOptions = {
      from: `"${process.env.ZOHO_FROM_NAME || 'Vanguard Tech Ops'}" <${process.env.ZOHO_SMTP_USER}>`,
      to: 'contact@vanguardtechops.com',
      replyTo: email,
      subject: `New Inquiry Protocol: ${service}`,
      text: `
IDENTITY: ${name}
COORDINATES: ${email}
SERVICE DOMAIN: ${service}

SPECIFICATIONS:
${message}

---
Transmission secured via Vanguard Tech Ops API.
      `,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #0047AB; border-bottom: 2px solid #0047AB; padding-bottom: 10px;">New Inquiry Protocol</h2>
          <p><strong>Identity:</strong> ${name}</p>
          <p><strong>Coordinates:</strong> ${email}</p>
          <p><strong>Service Domain:</strong> ${service}</p>
          <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #0047AB; margin-top: 20px;">
            <strong>Specifications:</strong><br/>
            ${message.replace(/\n/g, '<br/>')}
          </div>
          <hr style="margin-top: 30px; border: 0; border-top: 1px solid #eee;" />
          <p style="font-size: 10px; color: #999; text-transform: uppercase; letter-spacing: 2px;">Transmission secured via Vanguard Tech Ops API</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Protocol Accepted' });
  } catch (error) {
    console.error('SMTP Transmission Failure:', error);
    return res.status(500).json({ error: 'Transmission Failed' });
  }
}
