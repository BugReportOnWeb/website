// import Footer from "@/components/Footer";
import blogs from "@/blogs/data";
import Link from "next/link";

// Possible other colors (hover: lighter -> darker):
// #06101A
// #050F19 (current)
// #050D17
// #040C14

const Blog = () => {
    return (
        <div className='h-full flex justify-center'>
            <div className='max-w-4xl absolute mt-20 px-5 pt-5 pb-10 flex flex-col justify-center items-center gap-[1.85rem] sm:gap-11 sm:pt-10'>
                {blogs.map((blog, index) => (
                    <Link href='/' key={index} className='p-6 border border-[#27272A] rounded-lg flex flex-col justify-center items-start gap-3 sm:p-10 hover:bg-[#050F19]'>
                        <div>
                            <h1 className='font-bold text-2xl text-[#ededed]'>{blog.title}</h1>
                            <h1 className='text-xs mt-[0.425rem] text-[#ededed]/40'>{blog.date}</h1>
                        </div>
                        <p className='text-sm leading-[26px] text-[#ededed]/80'>{blog.description}</p>
                    </Link>
                ))}
            </div>
            {/* <Footer component='blog' /> */}
        </div>
    )
}

export default Blog;
