import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { trigger_automation_email } from './src/lib/emailService.ts';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/api/send-email', async (req, res) => {
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

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
