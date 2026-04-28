import express from 'express';
import { trigger_automation_email } from './src/lib/emailService.js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

// API route
app.post('/api/contact', async (req, res) => {
  const { name, email, service, message } = req.body;
  
  const result = await trigger_automation_email(
    process.env.MAIL_TO || 'contact@vanguardtechops.com',
    `New Inquiry from ${name}: ${service}`,
    `
      <table style="width: 100%; border-collapse: collapse; font-family: sans-serif;">
        <thead>
          <tr style="background-color: #f4f4f4;">
            <th colspan="2" style="padding: 10px; text-align: left; border: 1px solid #ddd;">New Website Inquiry</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Name:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Service:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${service}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; vertical-align: top;">Message:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${message.replace(/\n/g, '<br>')}</td>
          </tr>
        </tbody>
      </table>
    `
  );

  if (result.success) {
    res.status(200).json({ message: 'Email sent successfully' });
  } else {
    res.status(500).json({ error: result.error });
  }
});

// Serve frontend in production, or proxy dev requests
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('dist'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
