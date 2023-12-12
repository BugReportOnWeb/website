import { useFormStatus } from "react-dom";

const ContactFormButton = () => {
    const { pending } = useFormStatus();

    return (
        <button
            type='submit'
            disabled={pending}
            className='mx-auto bg-[#f8fafc] font-medium text-[#020205] w-full h-10 rounded-md flex justify-center items-center cursor-pointer transition-colors ease-in-out hover:bg-[#f8fafc]/90 disabled:cursor-progress'
        >
            {pending ? 'Sending...' : 'Send Email'}
        </button>
    )
}

export default ContactFormButton;
