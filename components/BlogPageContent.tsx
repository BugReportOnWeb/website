"use client"

import Tags from "./Tags";
import { useState } from "react";
import Footer from "./Footer";
import BlogCard from "./BlogCard";
import { BlogPost } from "@/lib/blogs";

type BlogPageContentProps = {
    blogPosts: BlogPost[];
    blogTags: string[];
}

const BlogPageContent = ({ blogTags, blogPosts }: BlogPageContentProps) => {
    const [currentTag, setCurrentTag] = useState('All');

    return (
        <div className='max-w-4xl absolute px-4 pb-10 flex flex-col gap-8 sm:gap-10'>
            <Tags tags={blogTags} currentTag={currentTag} setCurrentTag={setCurrentTag} />
            <div className="flex flex-col justify-center items-center gap-5 mb-2 sm:gap-7">
                {currentTag === 'All' ? (
                    <>
                        {blogPosts.map(post => (
                            <BlogCard key={post.slug} post={{ metadata: post.metadata, slug: post.slug }} />
                        ))}
                    </>
                ) : (
                    <>
                        {blogPosts
                            .filter(post => post.metadata.tags.includes(currentTag))
                            .map(post => (
                                <BlogCard key={post.slug} post={{ metadata: post.metadata, slug: post.slug }} />
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
