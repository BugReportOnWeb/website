import { useRef } from 'react';
import { BiSolidRightArrow } from 'react-icons/bi';
import { sendMail } from '@/app/actions';
import ContactFormButton from './ContactFormButton';

const EMAIL = process.env.NEXT_PUBLIC_EMAIL;

const ContactForm = () => {
    const formRef = useRef<HTMLFormElement>(null);

    return (
        <form action={async (formData: FormData) => {
            formRef.current?.reset();
            await sendMail(formData);
        }} ref={formRef} className='w-full flex flex-col justify-center gap-5'>
            <a href={`mailto:${EMAIL}`} className='w-fit text-start flex items-center'><BiSolidRightArrow className='mr-2' />{EMAIL}</a>
            <input
                type='text'
                name='name'
                required
                maxLength={500}
                placeholder='Name'
                className='rounded-md bg-inherit border border-[#242F2B] py-2 px-3 text-sm w-full h-10 outline-white outline-offset-2 focus:outline focus:outline-2'
            />
            <input
                type='email'
                name='email'
                required
                maxLength={500}
                placeholder='Email Address'
                className='rounded-md bg-inherit border border-[#242F2B] py-2 px-3 text-sm w-full h-10 outline-white outline-offset-2 focus:outline focus:outline-2'
            />
            <textarea
                name='message'
                required
                maxLength={5000}
                placeholder='Type your message here.'
                className='rounded-md bg-inherit border border-[#242F2B] py-2 px-3 text-sm w-full h-40 outline-white outline-offset-2 focus:outline focus:outline-2'
            />
            <ContactFormButton />
        </form>
    )
}

export default ContactForm;
