import Image from "next/image";
import Script from "next/script";
import profileImage from '@/public/profile.png';
import ProjectCard from "@/components/ProjectCard";
import projects from "@/lib/projects";
import Footer from "@/components/Footer";

const Home = () => {
    return (
        <>
            <div className='h-full pt-[4.75rem] sm:pt-[5.75rem]'>
                <div className='px-4 flex flex-col gap-8'>
                    {/* Hero section */}
                    <div className='flex flex-row-reverse items-center gap-8'>
                        <Image
                            priority={true}
                            placeholder="blur"
                            className='w-28 h-28 rounded-full hidden sm:block'
                            src={profileImage}
                            alt="My picture (Dev) :)"
                        />

                        <div className='text-sm flex flex-col gap-3.5 leading-[26px]'>
                            <h1 className='font-bold text-2xl'>Hi, I&apos;m Dev</h1>
                            <p>I&apos;m a hobbyist developer from Shimla and this is my corner of the web :)</p>
                            <p>I code for fun, creating silly scripts and web apps, and diving into all things tech before 2092. Oh, and music? It&apos;s my true passion and brings me so much joy!</p>
                            <p>Feel free to wander around and check out my work and stuff!</p>
                        </div>
                    </div>

                    {/* Project section */}
                    <div className=''>
                        <h1 className='font-bold text-lg mb-3.5'>Projects</h1>
                        <div className='grid sm:grid-cols-2 gap-3.5'>
                            {projects.map(project => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
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
