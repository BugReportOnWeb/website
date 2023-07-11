import Image from "next/image";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";

const Home = () => {
    return (
        <div className='max-w-md mx-auto flex flex-col px-3 pb-7 justify-center items-center gap-5 sm:flex-row-reverse sm:items-start sm:mt-0 sm:max-w-[40rem]'>
            <Image height={170} width={170} className='rounded-full' src='/profile.png' alt="Author's Photo" />
            <div className='sm:w-3/4'>
                <p className='leading-8'>Hey there! I'm Dev, a hobbyist developer from Shimla, HP. I love coding for fun, creating silly scripts and websites, diving into all the tech stuff before 2092. Apart from that, music is my true passion and brings me so much joy. While I'm not entirely sure about my exact purpose of all this, but feel free to check out my work and stuff. Take your time to explore, no pressure! :)</p>
                <div className='mt-7 text-xs flex flex-col justify-around gap-3 sm:flex-row'>
                    <a className='border border-slate-600 w-full h-10 rounded-md flex justify-center items-center cursor-pointer font-semibold transition-colors ease-in-out hover:bg-[#ededed] hover:text-black' href='https://github.com/BugReportOnWeb' target='_blank'><span><AiFillGithub className='mr-2 text-xl' /></span>GitHub</a>
                    <a className='border border-slate-600 w-full h-10 rounded-md flex justify-center items-center cursor-pointer font-semibold transition-colors ease-in-out hover:bg-[#ededed] hover:text-black' href='https://twitter.com/devkaul0' target='_blank'><span><AiOutlineTwitter className='mr-2 text-xl' /></span>Twitter</a>
                </div>
            </div>
        </div>
    )
}

export default Home;
