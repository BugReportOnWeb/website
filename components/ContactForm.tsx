import { ChangeEvent, FormEvent, useState } from 'react';
import { BiSolidRightArrow } from 'react-icons/bi';
import { FormData } from '@/types/FormData';

const EMAIL = process.env.NEXT_PUBLIC_EMAIL;
const env = process.env.NODE_ENV;

// CHECK: Storage for constant values?
const defaultFormData = {
    name: "",
    email: "",
    message: ""
}

const ContactForm = () => {
    const [formData, setFormData] = useState<FormData>(defaultFormData);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prevData => ({
            ...prevData,
            [e.target.name]: e.target.value
        }));
    }

    const sendMail = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        // CHECK: Right way to do 'dev' vs 'prod'?
        try {
            const res = await fetch(env == 'development'
                ? `http://localhost:3000/api/send`
                : `https://devkaul.vercel.app/api/send`, {
                method: 'POST',
                headers: { "Content-Type": "application/json", },
                body: JSON.stringify(formData)
            })

            const data = await res.json();

            // TODO/CHECK: Do something useful with these consoles (if necessary)
            console.log(data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }

        // TODO: Add loading state for resend api
        setFormData(defaultFormData);
    }

    return (
        <form onSubmit={sendMail} className='w-full flex flex-col justify-center gap-5'>
            <a href={`mailto:${EMAIL}`} className='w-fit text-start flex items-center'><BiSolidRightArrow className='mr-2' />{EMAIL}</a>
            <input
                type='text'
                name='name'
                onChange={handleChange}
                value={formData.name}
                required
                maxLength={500}
                placeholder='Name'
                className='rounded-md bg-inherit border border-[#242F2B] py-2 px-3 text-sm w-full h-10 outline-white outline-offset-2 focus:outline focus:outline-2'
            />
            <input
                type='email'
                name='email'
                onChange={handleChange}
                value={formData.email}
                required
                maxLength={500}
                placeholder='Email Address'
                className='rounded-md bg-inherit border border-[#242F2B] py-2 px-3 text-sm w-full h-10 outline-white outline-offset-2 focus:outline focus:outline-2'
            />
            <textarea
                name='message'
                onChange={handleChange}
                value={formData.message}
                required
                maxLength={5000}
                placeholder='Type your message here.'
                className='rounded-md bg-inherit border border-[#242F2B] py-2 px-3 text-sm w-full h-40 outline-white outline-offset-2 focus:outline focus:outline-2'
            />
            <button type='submit' disabled={loading} className='mx-auto bg-[#f8fafc] font-medium text-[#020205] w-full h-10 rounded-md flex justify-center items-center cursor-pointer transition-colors ease-in-out hover:bg-[#f8fafc]/90 disabled:cursor-wait'>Send Email</button>
        </form>
    )
}

export default ContactForm;
