import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

import express from 'express';
import cors from 'cors';
import { trigger_automation_email, send_user_confirmation } from './src/lib/emailService.ts';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// API route
app.post('/api/contact', async (req, res) => {
  const { name, email, service, message } = req.body;
  
  if (!name || !email || !service || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  console.log(`[API] Received inquiry from: ${name} <${email}> for ${service}`);

  const result = await trigger_automation_email(
    process.env.MAIL_TO || 'contact@vanguardtechops.com',
    `New Inquiry from ${name}: ${service}`,
    `
      <div style="max-width: 600px; margin: 0 auto; font-family: sans-serif; color: #333;">
        <h2 style="color: #000; border-bottom: 1px solid #eee; padding-bottom: 10px;">New Website Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <div style="background: #f9f9f9; padding: 15px; border-radius: 4px; border: 1px solid #eee;">
          ${message.replace(/\n/g, '<br>')}
        </div>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
        <p style="font-size: 12px; color: #999;">Sent from vanguardtechops.com inquiry portal.</p>
      </div>
    `
  );

  if (result.success) {
    // Send confirmation to user
    await send_user_confirmation(email, name, service, message);
    res.status(200).json({ message: 'Email sent successfully' });
  } else {
    console.error('[API] Email transmission failure:', result.error);
    res.status(500).json({ error: result.error });
  }
});

// Serve frontend files
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

// SPA Fallback for non-API routes
app.use((req, res, next) => {
  if (req.path.startsWith('/api')) {
    return res.status(404).json({ error: 'API route not found' });
  }
  res.sendFile(path.join(distPath, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(Number(PORT), '0.0.0.0', () => {
  console.log(`[SYSTEM] Server initialized on port ${PORT}`);
  console.log(`[SYSTEM] Environment: ${process.env.NODE_ENV || 'development'}`);
});
