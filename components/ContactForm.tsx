import { ChangeEvent, useState } from 'react';
import { BiSolidRightArrow } from 'react-icons/bi';

type Person = {
    name: string,
    email: string,
    message: string
}

const ContactForm = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const EMAIL = process.env.NEXT_PUBLIC_EMAIL;
    
    const sendMail = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        const person: Person = { name, email, message };
        // TODO: Add functionality for sending mail
        console.log(person);

        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <form onSubmit={sendMail} className='w-full flex flex-col justify-center gap-5'>
            <a href={`mailto:${EMAIL}`} className='w-fit text-start flex items-center'><BiSolidRightArrow className='mr-2' />{EMAIL}</a>
            <input type='text' onChange={e => setName(e.target.value)} value={name} className='rounded-md bg-inherit border border-[#242F2B] py-2 px-3 text-sm w-full h-10 outline-white outline-offset-2 focus:outline focus:outline-2' placeholder='Name' />
            <input type='email' onChange={e => setEmail(e.target.value)} value={email} className='rounded-md bg-inherit border border-[#242F2B] py-2 px-3 text-sm w-full h-10 outline-white outline-offset-2 focus:outline focus:outline-2' placeholder='Email Address' />
            <textarea onChange={e => setMessage(e.target.value)} value={message} className='rounded-md bg-inherit border border-[#242F2B] py-2 px-3 text-sm w-full h-40 outline-white outline-offset-2 focus:outline focus:outline-2' placeholder='Type your message here.' />
            <button type='submit' className='mx-auto bg-[#f8fafc] font-medium text-[#020205] w-full h-10 rounded-md flex justify-center items-center cursor-pointer transition-colors ease-in-out hover:bg-[#f8fafc]/90'>Send Email</button>
        </form>
    )
}

export default ContactForm;
