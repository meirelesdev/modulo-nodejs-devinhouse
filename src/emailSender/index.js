require('dotenv/config')
import nodemailer from 'nodemailer';

export default nodemailer.createTransport({
    host: process.env.SMTP_URL,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
