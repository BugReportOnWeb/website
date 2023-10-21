import { ChangeEvent, FormEvent, useState } from 'react';
import { BiSolidRightArrow } from 'react-icons/bi';
import { FormData } from '@/types/FormData';

const ContactForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: ""
    });

    const EMAIL = process.env.NEXT_PUBLIC_EMAIL;

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prevData => ({
            ...prevData,
            [e.target.name]: e.target.value
        }))
    }

    const sendMail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // TODO: Add checker for empty values inside form
        // TODO: Add functionality for sending mail
        console.log(formData);

        // TODO: Find another way to encapsulate this default form data value
        // DESC: Used for reseting and assigning as default in state
        setFormData({
            name: "",
            email: "",
            message: ""
        })
    }

    return (
        <form onSubmit={sendMail} className='w-full flex flex-col justify-center gap-5'>
            <a href={`mailto:${EMAIL}`} className='w-fit text-start flex items-center'><BiSolidRightArrow className='mr-2' />{EMAIL}</a>
            <input
                type='text'
                name='name'
                onChange={handleChange}
                value={formData.name}
                className='rounded-md bg-inherit border border-[#242F2B] py-2 px-3 text-sm w-full h-10 outline-white outline-offset-2 focus:outline focus:outline-2'
                placeholder='Name'
            />
            <input
                type='email' 
                name='email' 
                onChange={handleChange} 
                value={formData.email} 
                className='rounded-md bg-inherit border border-[#242F2B] py-2 px-3 text-sm w-full h-10 outline-white outline-offset-2 focus:outline focus:outline-2'
                placeholder='Email Address'
            />
            <textarea 
                name='message'
                onChange={handleChange}
                value={formData.message}
                className='rounded-md bg-inherit border border-[#242F2B] py-2 px-3 text-sm w-full h-40 outline-white outline-offset-2 focus:outline focus:outline-2'
                placeholder='Type your message here.'
            />
            <button type='submit' className='mx-auto bg-[#f8fafc] font-medium text-[#020205] w-full h-10 rounded-md flex justify-center items-center cursor-pointer transition-colors ease-in-out hover:bg-[#f8fafc]/90'>Send Email</button>
        </form>
    )
}

export default ContactForm;
