"use client"

import { MetaData } from "@/types/Blog";
import Tags from "./Tags";
import { useState } from "react";
import Footer from "./Footer";
import BlogCard from "./BlogCard";

type BlogPageContentProps = {
    // HACK: Appending 'id' field in 'MetaData' type
    blogsMetaData: (MetaData & { id: string })[];
    blogTags: string[];
}

const BlogPageContent = ({ blogTags, blogsMetaData }: BlogPageContentProps) => {
    const [currentTag, setCurrentTag] = useState('All');

    return (
        <div className='max-w-4xl absolute px-4 pb-10 flex flex-col gap-8 sm:gap-10'>
            <Tags tags={blogTags} currentTag={currentTag} setCurrentTag={setCurrentTag} />
            <div className="flex flex-col justify-center items-center gap-5 mb-2 sm:gap-7">
                {currentTag === 'All' ? (
                    <>
                        {blogsMetaData.map(metaData => (
                            <BlogCard key={metaData.id} metaData={metaData} />
                        ))}
                    </>
                ) : (
                    <>
                        {blogsMetaData
                            .filter(metadata => metadata.tags.includes(currentTag))
                            .map(metaData => (
                                <BlogCard key={metaData.id} metaData={metaData} />
                            ))
                        }
                    </>
                )}
            </div>
            <Footer />
        </div>
    )
}

export default BlogPageContent;
