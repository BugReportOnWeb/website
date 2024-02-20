import Image from "next/image";
import Script from "next/script";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";

import Footer from "@/components/Footer";
import profileImage from '@/public/profile.png';


const Home = () => {
    return (
        <>
            <div className='h-full pt-[6.75rem] sm:flex sm:justify-center sm:items-center sm:pt-0'>
                <div className='relative max-w-sm mx-auto flex flex-col px-5 pb-7 justify-center items-center gap-8 sm:static sm:flex-row-reverse sm:items-start sm:pb-0 sm:max-w-2xl sm:gap-7'>
                    <Image
                        priority={true}
                        placeholder="blur"
                        className='w-40 h-40 rounded-full'
                        src={profileImage}
                        alt="Picture of the Dev"
                    />
                    <div>
                        <p className='leading-8'>Hey! I&apos;m Dev, a hobbyist developer hailing from Shimla. Welcome to my corner of the web. I code for fun, creating silly scripts and web apps, and diving into all things tech before 2092. Oh, and music? It&apos;s my true passion and brings me so much joy! Feel free to wander around and check out my work and stuff :)</p>
                        <div className='mt-7 text-xs flex flex-col justify-around gap-3 sm:flex-row'>
                            <a className='bg-[#f8fafc] font-medium text-[#020205] w-full h-10 rounded-md flex justify-center items-center cursor-pointer transition-colors ease-in-out hover:bg-[#f8fafc]/90' href='https://github.com/BugReportOnWeb' target='_blank'><span><AiFillGithub className='mr-2 text-xl' /></span>GitHub</a>
                            <a className='bg-[#f8fafc] font-medium text-[#020205] w-full h-10 rounded-md flex justify-center items-center cursor-pointer transition-colors ease-in-out hover:bg-[#f8fafc]/90' href='https://twitter.com/devkaul0' target='_blank'><span><AiOutlineTwitter className='mr-2 text-xl' /></span>Twitter</a>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
            <Script data-goatcounter="https://devkaul.goatcounter.com/count" async src="//gc.zgo.at/count.js" />
        </>
    )
}

export default Home;
