const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: '../config/config.env' });

const sendEmail = async options => {
  // 1) Create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.mailtrap.io',
    port: process.env.SMTP_PORT || 2525,
    auth: {
      user: process.env.SMTP_USERNAME || '4823f207d8dbbc',
      pass: process.env.SMTP_PASSWORD || '9a3b38bcef8e60'
    }
  });

  // 2) Define the email options
  const mailOptions = {
    from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
    to: options.email,
    subject: options.subject,
    text: options.message
  };

  // 3) Actually send the email
 const info =  await transporter.sendMail(mailOptions);

 console.log('Message sent: %s', info.messageId);
};

module.exports = sendEmail;