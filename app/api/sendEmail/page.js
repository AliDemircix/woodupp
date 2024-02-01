import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const { subject, component } = await request.json();

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'ad.woodup@gmail.com',
                pass: 'woodup123.',
            },
        });

        const mailOption = {
            from: 'ad.woodup@gmail.com',
            to: 'doganermansur@icloud.com',
            subject: 'Test',
            html: `
        <h3>Hello Boss</h3>
        <div> ${message} </div>
        `,
        };

        await transporter.sendMail(mailOption);

        return NextResponse.json({ message: 'Email Sent Successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Failed to Send Email' }, { status: 500 });
    }
}
