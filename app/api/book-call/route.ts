import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const data = await request.json();

  // Create a transporter using SMTP
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use TLS
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Email content
  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: "hasan.anas.original@gmail.com",
    subject: "New Call Booking Request",
    text: `
      New call booking request:
      Name: ${data.name}
      Email: ${data.email}
      Phone: ${data.phone}
      Company: ${data.company || 'Not provided'}
      Service: ${data.service}
      Message: ${data.message || 'Not provided'}
      Preferred Call Date: ${data.callDate}
    `,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}