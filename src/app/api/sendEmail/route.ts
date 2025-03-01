// filepath: /c:/Users/David/Documents/Programacion 23/Nextjs/survey_expb/src/app/api/sendEmail/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { name, email, phone, country } = await req.json();

  // Fetch the latest survey result
  const lastSurvey = await prisma.surveyResult.findFirst({
    orderBy: {
      createdAt: 'desc',
    },
  });

  // Create a transporter object using Gmail SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  // Format the survey values
  const surveyValues = lastSurvey && lastSurvey.values ? Object.entries(lastSurvey.values).map(([key, value]) => `${key}: ${value}`).join('\n') : 'No survey results found';

  // Email options
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: 'Survey Submission Confirmation - Export Brands',
    text: `Hola,\n\n${name} ha diligenciado el formulario.\n\nDatos de contactos:\nName: ${name}\nEmail: ${email}\nCelular: ${phone}\nPaís: ${country}\n\nResultados del diagnostico:\n${surveyValues}\n\nSaludos,\nSurvey Team`,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }
}