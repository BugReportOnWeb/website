"use server"

import { Resend } from "resend";

const RECEIVER_EMAIL = process.env.NEXT_PUBLIC_EMAIL;
const API_KEY = process.env.RESEND_API_KEY;

const resend = new Resend(API_KEY);

const sendMail = async (formData: FormData) => {
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    const honeypot = formData.get('honeypot')

    if (honeypot) return;

    const newMessage = `'${name}' wrote - ${message}`;

    try {
        // TODO: Make a react template for the message
        // TEST: Correct way to typecase 'as string'?
        const res = await resend.emails.send({
            from: 'Website contact form <onboarding@resend.dev>',
            to: RECEIVER_EMAIL as string,
            reply_to: email as string,
            subject: 'New message from website contact form',
            text: newMessage,
        })

        // TODO: Do something usefull with error catching
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

export { sendMail };
