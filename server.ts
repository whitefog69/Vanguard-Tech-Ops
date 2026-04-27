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
    'contact@vanguardtechops.com',
    `New Inquiry from ${name}: ${service}`,
    `
      <h1>New Website Inquiry</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
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
