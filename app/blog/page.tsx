import Link from "next/link";

import Date from "@/components/Date";
import { getSortedBlogsMetaData } from "@/lib/blogs";

// Possible other colors (hover: lighter -> darker):
// #06101A
// #050F19 (current)
// #050D17
// #040C14

const Blogs = () => {
    const blogsMetaData = getSortedBlogsMetaData();

    return (
        <div className='h-full flex justify-center'>
            <div className='max-w-4xl absolute mt-20 px-5 pt-5 pb-10 flex flex-col justify-center items-center gap-[1.85rem] sm:gap-11 sm:pt-14'>
                {blogsMetaData.map((metaData, index) => (
                    <Link href={`/blog/${metaData.id}`} key={index} className='w-full p-6 border border-[#27272A] rounded-lg flex flex-col justify-center items-start gap-3 sm:p-9 hover:bg-[#050F19]'>
                        <div>
                            <h1 className='font-bold text-2xl text-[#ededed]'>{metaData.title}</h1>
                            <Date className='text-xs mt-[0.425rem] text-[#ededed]/40' dateString={metaData.date} />
                        </div>
                        <p className='text-sm leading-[26px] text-[#ededed]/80'>{metaData.description}</p>
                    </Link>
                ))}
            </div>
            {/* TODO: Add Footer */}
        </div>
    )
}

export default Blogs;
