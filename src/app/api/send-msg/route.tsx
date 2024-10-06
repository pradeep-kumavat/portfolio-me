import nodemailer from 'nodemailer';
import ContactFormEmail from '@/emails/emailTemp';
import { NextRequest, NextResponse } from 'next/server';
import { render } from '@react-email/render';

export async function POST(req:NextRequest) {
    try {

    const { name, email, message } = await req.json();
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: true,
        port: 465,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const emailTemplate = await render(<ContactFormEmail name={name} email={email} message={message}/>);

      const info = await transporter.sendMail({
        from: process.env.EMAIL_USER ,
        to: process.env.EMAIL_USER,
        subject: "Message Received from Portfolio", 
        html: emailTemplate, 
      });

    return NextResponse.json({
        message: "Email sent successfully",
        success: true,
        data: info
    });

} catch (error: any) {
    return NextResponse.json({error: error.message}, {status: 500})
}

}

