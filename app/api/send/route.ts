import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const API = process.env.RESEND_API_KEY;
const resend = new Resend(API);

export const POST = async (req: NextRequest) => {
    const { name, email, message } = await req.json();

    const newMessage = `${name} wrote - ${message}`;

    try {
        // TODO: Make a react template for the message
        const res = await resend.emails.send({
            from: 'Website contact form <onboarding@resend.dev>',
            to: 'devasheesh0909@gmail.com',
            reply_to: email,
            subject: 'New message from website contact form',
            html: newMessage,

        })
        return NextResponse.json({ res });
    } catch (error) {
        return NextResponse.json({ error });
    }
}
