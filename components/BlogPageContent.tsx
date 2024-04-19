"use client"

import { MetaData } from "@/types/Blog";
import Tags from "./Tags";
import Link from "next/link";
import Date from "./Date";
import { useState } from "react";

// Possible other colors (hover: lighter -> darker):
// #06101A
// #050F19 (current)
// #050D17
// #040C14

type BlogPageContentProps = {
    // HACK: Appending 'id' field in 'MetaData' type
    blogsMetaData: (MetaData & { id: string })[];
    blogTags: string[];
}

const BlogPageContent = ({ blogTags, blogsMetaData }: BlogPageContentProps) => {
    const [currentTag, setCurrentTag] = useState('#All');

    return (
        <div className='max-w-4xl absolute mt-20 px-5 pt-5 pb-10 flex flex-col gap-6'>
            <Tags tags={blogTags} currentTag={currentTag} setCurrentTag={setCurrentTag} />
            <div className="flex flex-col justify-center items-center gap-[1.85rem] sm:gap-6">
                {blogsMetaData.map(metaData => (
                    <Link href={`/blog/${metaData.id}`} key={metaData.id} className='w-full p-6 border border-[#27272A] rounded-lg flex flex-col justify-center items-start gap-3 sm:p-9 hover:bg-[#050F19]'>
                        <div>
                            <h1 className='font-bold text-2xl text-[#ededed]'>{metaData.title}</h1>
                            <Date className='text-xs mt-[0.425rem] text-[#ededed]/40' dateString={metaData.date} />
                        </div>
                        <p className='text-sm leading-[26px] text-[#ededed]/80'>{metaData.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default BlogPageContent;
