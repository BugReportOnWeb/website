import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const RECEIVER_EMAIL = process.env.NEXT_PUBLIC_EMAIL;
const API_KEY = process.env.RESEND_API_KEY;

const resend = new Resend(API_KEY);

export const POST = async (req: NextRequest) => {
    const { name, email, message } = await req.json();
    const newMessage = `${name} wrote - ${message}`;

    try {
        // TODO: Make a react template for the message
        const res = await resend.emails.send({
            from: 'Website contact form <onboarding@resend.dev>',
            to: RECEIVER_EMAIL as string,
            reply_to: email,
            subject: 'New message from website contact form',
            text: newMessage,
        })

        return NextResponse.json({ res });
    } catch (error) {
        return NextResponse.json({ error });
    }
}
