"use client"

import { useState } from 'react';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

// Icons
import { FaTelegramPlane, FaDiscord } from 'react-icons/fa';

const Contact = () => {
    const [usernameCopied, setUsernameCopied] = useState<boolean>(false);

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
                <ContactForm />
            </div>
            <Footer component='contact' />
        </div>
    )
}

export default Contact;
