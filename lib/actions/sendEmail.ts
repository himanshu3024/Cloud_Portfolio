'use server';

import nodemailer from 'nodemailer';
import { z } from 'zod';

const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    subject: z.string().min(5, 'Subject must be at least 5 characters'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function sendEmail(formData: z.infer<typeof contactSchema>) {
    // Validate data on the server
    const result = contactSchema.safeParse(formData);

    if (!result.success) {
        return { error: 'Invalid form data. Please check your inputs.' };
    }

    const { name, email, subject, message } = result.data;

    // Configure transporter (Gmail SMTP)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD,
        },
    });

    try {
        // Send the email
        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.GMAIL_USER, // Send to yourself
            subject: `New Portfolio Message: ${subject}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #00A6D6;">New Portfolio Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="border: 0; border-top: 1px solid #eee;" />
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
        });

        return { success: true };
    } catch (error) {
        console.error('Email sending error:', error);
        return { error: 'Failed to send email. Please try again later.' };
    }
}
