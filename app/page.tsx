import Image from "next/image";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";

const Home = () => {
    return (
        <div className='h-full pt-20 sm:flex sm:justify-center sm:items-center sm:pt-5'>
            <div className='max-w-sm mx-auto flex flex-col px-3 pb-7 justify-center items-center gap-5 sm:flex-row-reverse sm:items-start sm:pb-0 sm:max-w-[40rem]'>
                <Image height={170} width={170} className='rounded-full' src='/profile.png' alt="Author's Photo" priority />
                <div className='sm:w-4/5'>
                    <p className='leading-8'>Hey! I&apos;m Dev, a hobbyist developer from Shimla, HP and welcome to my space. I code for fun, creating silly scripts and websites, and diving into all things tech before 2092. Oh, and music? It&apos;s my true passion and brings me so much joy. Feel free to wander around and checkout my work and stuff. Take your time, no pressure! :)</p>
                    <div className='mt-7 text-xs flex flex-col justify-around gap-3 sm:flex-row'>
                        <a className='bg-[#ededed] font-medium text-black w-full h-10 rounded-md flex justify-center items-center cursor-pointer transition-colors ease-in-out hover:bg-[#ededed]/90' href='https://github.com/BugReportOnWeb' target='_blank'><span><AiFillGithub className='mr-2 text-xl' /></span>GitHub</a>
                        <a className='bg-[#ededed] font-medium text-black w-full h-10 rounded-md flex justify-center items-center cursor-pointer transition-colors ease-in-out hover:bg-[#ededed]/90' href='https://twitter.com/devkaul0' target='_blank'><span><AiOutlineTwitter className='mr-2 text-xl' /></span>Twitter</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
