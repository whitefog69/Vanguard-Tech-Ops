import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

async function testSmtp() {
  console.log('Testing SMTP connection...');
  console.log('User:', process.env.ZOHO_USER);
  
  const transporter = nodemailer.createTransport({
    host: 'smtppro.zoho.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.ZOHO_USER,
      pass: process.env.ZOHO_PASS,
    },
  });

  try {
    await transporter.verify();
    console.log('SUCCESS: SMTP connection verified.');
  } catch (error) {
    console.error('FAILURE: SMTP connection failed.');
    console.error(error);
    
    console.log('\nTrying fallback host smtp.zoho.com...');
    const transporterFallback = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_USER,
        pass: process.env.ZOHO_PASS,
      },
    });

    try {
      await transporterFallback.verify();
      console.log('SUCCESS: SMTP connection verified with fallback host.');
    } catch (fallbackError) {
      console.error('FAILURE: Fallback host also failed.');
      console.error(fallbackError);
    }
  }
}

testSmtp();
