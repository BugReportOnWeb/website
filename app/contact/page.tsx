"use client"

import { ChangeEvent, useState } from 'react';
import Footer from '@/components/Footer';

// Icons
import { FaTelegramPlane, FaDiscord } from 'react-icons/fa';
import { BiSolidRightArrow } from 'react-icons/bi';

type Person = {
    name: string,
    email: string,
    message: string
}

const Contact = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [usernameCopied, setUsernameCopied] = useState<boolean>(false);

    const sendMail = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        const person: Person = { name, email, message };
        // TODO: Add functionality for sending mail
        console.log(person);

        setName('');
        setEmail('');
        setMessage('');
    }

    const copyUsername = () => {
        navigator.clipboard.writeText("devkaul");

        setUsernameCopied(true);
        setTimeout(() => setUsernameCopied(false), 1800);
    }

    return (
        <div className='h-full pt-[6.75rem] sm:flex sm:justify-center sm:items-center sm:pt-5'>
            <div className='mx-auto flex pb-7 px-5 flex-col justify-center items-center w-[26rem] gap-10'>
                <div className='w-full flex items-start gap-5'>
                    <a href='https://t.me/devkaul' target='_blank' className='text-sm border border-[#242F2B] w-full px-5 py-3 rounded-md flex justify-center items-center cursor-pointer transition-colors ease-in-out bg-transparent hover:bg-[#27272a]'><span><FaTelegramPlane className='mr-2 text-xl' /></span>Telegram</a>
                    <button onClick={copyUsername} className='relative text-sm border border-[#242F2B] w-full px-5 py-3 rounded-md flex justify-center items-center cursor-pointer transition-colors ease-in-out bg-transparent hover:bg-[#27272a]'>
                        <span><FaDiscord className='mr-2 text-xl' /></span>Discord
                        <h1 className={`absolute text-[0.85rem] w-full top-0 left-1/2 -translate-x-1/2 -translate-y-[150%] transition-opacity duration-300 ease-in-out ${usernameCopied ? 'opacity-1' : 'opacity-0'}`}>Username copied!</h1>
                    </button>
                </div>

                <div className='relative w-full border border-[#242F2B]'>
                    <div className='absolute border border border-[#242F2B] flex justify-center items-center px-3 py-1 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl text-xs text-white/70 bg-black'>OR</div>
                </div>

                <form onSubmit={sendMail} className='w-full flex flex-col justify-center gap-5'>
                    <h1 className='text-start flex items-center'><BiSolidRightArrow className='mr-2' />devasheeshkaul@gmail.com</h1>
                    <input type='text' onChange={e => setName(e.target.value)} value={name} className='rounded-md bg-inherit border border-[#242F2B] py-2 px-3 text-sm w-full h-10 outline-white outline-offset-2 focus:outline focus:outline-2' placeholder='Name' />
                    <input type='email' onChange={e => setEmail(e.target.value)} value={email} className='rounded-md bg-inherit border border-[#242F2B] py-2 px-3 text-sm w-full h-10 outline-white outline-offset-2 focus:outline focus:outline-2' placeholder='Email Address' />
                    <textarea onChange={e => setMessage(e.target.value)} value={message} className='rounded-md bg-inherit border border-[#242F2B] py-2 px-3 text-sm w-full h-40 outline-white outline-offset-2 focus:outline focus:outline-2' placeholder='Type your message here.' />
                    <button type='submit' className='mx-auto bg-[#f8fafc] font-medium text-[#020205] w-full h-10 rounded-md flex justify-center items-center cursor-pointer transition-colors ease-in-out hover:bg-[#f8fafc]/90'>Send Email</button>
                </form>
            </div>
            <Footer component='contact' />
        </div>
    )
}

export default Contact;
