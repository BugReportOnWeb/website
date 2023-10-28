import { ChangeEvent, useState } from 'react';
import { BiSolidRightArrow } from 'react-icons/bi';
import { sendMail } from '@/app/actions';
import { ContactFormData } from '@/types/ContactFormData';

const EMAIL = process.env.NEXT_PUBLIC_EMAIL;

// CHECK: Storage for constant values?
const defaultFormData = {
    name: "",
    email: "",
    message: ""
}

const ContactForm = () => {
    const [contactFormData, setContactFormData] = useState<ContactFormData>(defaultFormData);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setContactFormData(prevData => ({
            ...prevData,
            [e.target.name]: e.target.value
        }));
    }

    const handleMailAction = async (formData: FormData) => {
        // TODO: Loading bug
        setIsLoading(true);

        // TODO: Clean up this area
        const res = await sendMail(formData);
        console.log(res);

        setContactFormData(defaultFormData);
        setIsLoading(false);
    }

    return (
        <form action={handleMailAction} className='w-full flex flex-col justify-center gap-5'>
            <a href={`mailto:${EMAIL}`} className='w-fit text-start flex items-center'><BiSolidRightArrow className='mr-2' />{EMAIL}</a>
            <input
                type='text'
                name='name'
                onChange={handleChange}
                value={contactFormData.name}
                required
                maxLength={500}
                placeholder='Name'
                className='rounded-md bg-inherit border border-[#242F2B] py-2 px-3 text-sm w-full h-10 outline-white outline-offset-2 focus:outline focus:outline-2'
            />
            <input
                type='email'
                name='email'
                onChange={handleChange}
                value={contactFormData.email}
                required
                maxLength={500}
                placeholder='Email Address'
                className='rounded-md bg-inherit border border-[#242F2B] py-2 px-3 text-sm w-full h-10 outline-white outline-offset-2 focus:outline focus:outline-2'
            />
            <textarea
                name='message'
                onChange={handleChange}
                value={contactFormData.message}
                required
                maxLength={5000}
                placeholder='Type your message here.'
                className='rounded-md bg-inherit border border-[#242F2B] py-2 px-3 text-sm w-full h-40 outline-white outline-offset-2 focus:outline focus:outline-2'
            />
            <button 
                type='submit'
                disabled={isLoading}
                className='mx-auto bg-[#f8fafc] font-medium text-[#020205] w-full h-10 rounded-md flex justify-center items-center cursor-pointer transition-colors ease-in-out hover:bg-[#f8fafc]/90 disabled:cursor-wait'
            >Send Email</button>
        </form>
    )
}

export default ContactForm;
