import Image from "next/image";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";



const Home = () => {
    return (
        <div className='max-w-md mx-auto flex flex-col px-3 pb-7 justify-center items-center gap-5 sm:flex-row-reverse sm:items-start sm:mt-0 sm:max-w-[40rem]'>
            <Image height={170} width={170} className='rounded-full' src='/profile.png' alt="Author's Photo" />
            <div className='sm:w-3/4'>
                <p className='leading-8'>Hey there! I&apos;m Dev, a hobbyist developer from Shimla, HP and welcome to my space. I code for fun, creating silly scripts and websites, and diving into all things tech before 2092. Oh, and music? It&apos;s my true passion and brings me so much joy. Feel free to wander around and discover my projects. Take your time, there&apos;s no hurry! :)</p>
                <div className='mt-7 text-xs flex flex-col justify-around gap-3 sm:flex-row'>
                    <a className='border border-slate-600 bg-[#ededed] text-black w-full h-10 rounded-md flex justify-center items-center cursor-pointer font-semibold transition-colors ease-in-out hover:bg-[#d4d4d4]' href='https://github.com/BugReportOnWeb' target='_blank'><span><AiFillGithub className='mr-2 text-xl' /></span>GitHub</a>
                    <a className='border border-slate-600 bg-[#ededed] text-black w-full h-10 rounded-md flex justify-center items-center cursor-pointer font-semibold transition-colors ease-in-out hover:bg-[#d4d4d4]' href='https://twitter.com/devkaul0' target='_blank'><span><AiOutlineTwitter className='mr-2 text-xl' /></span>Twitter</a>
                </div>
            </div>
        </div>
    )
}

export default Home;
