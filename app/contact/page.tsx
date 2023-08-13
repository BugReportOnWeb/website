import { FaTelegramPlane, FaDiscord } from 'react-icons/fa';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { BiSolidRightArrow } from 'react-icons/bi';

const Contact = () => {
    return (
        <div className='h-full pt-[6.75rem] sm:flex sm:justify-center sm:items-center sm:pt-5'>
            <div className='mx-auto p-5 flex flex-col justify-center items-center w-fit gap-10'>
                <div className='flex items-start gap-5'>
                    <div className='text-sm border border-[#242F2B] w-full px-5 py-3 rounded-md flex justify-center items-center cursor-pointer bg-transparent hover:bg-[#27272a]'><span><FaTelegramPlane className='mr-2 text-xl' /></span>Telegram</div>
                    <div className='text-sm border border-[#242F2B] w-full px-5 py-3 rounded-md flex justify-center items-center cursor-pointer bg-transparent hover:bg-[#27272a]'><span><BsFillChatDotsFill className='mr-2 text-xl' /></span>IRC</div>
                    <div className='text-sm border border-[#242F2B] w-full px-5 py-3 rounded-md flex justify-center items-center cursor-pointer bg-transparent hover:bg-[#27272a]'><span><FaDiscord className='mr-2 text-xl' /></span>Discord</div>
                </div>

                <div className='relative w-full border border-[#242F2B]'>
                    <div className='absolute border border border-[#242F2B] flex justify-center items-center px-3 py-1 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl text-xs text-white/70 bg-black'>OR</div>
                </div>

                <div className='w-full flex flex-col justify-center gap-5'>
                    <h1 className='text-start flex items-center'><BiSolidRightArrow className='mr-2' />devasheesh0909@gmail.com</h1>
                    <textarea className='rounded-md bg-inherit border border-[#242F2B] py-2 px-3 text-sm w-full h-40 outline-white outline-offset-2 focus:outline focus:outline-2' placeholder='Type you message here.' />
                    <button type='submit' className='mx-auto bg-[#f8fafc] font-medium text-[#020205] w-full h-10 rounded-md flex justify-center items-center cursor-pointer transition-colors ease-in-out hover:bg-[#f8fafc]/90'>Send Email</button>
                </div>
            </div>
        </div>
    )
}

export default Contact;
