import BlogPageContent from "@/components/BlogPageContent";
import { getBlogPosts, getBlogTags } from "@/lib/blogs";

const Blogs = () => {
    const blogPosts = getBlogPosts();
    const blogTags = getBlogTags(blogPosts);

    return (
        <div className='h-full pt-[4.75rem] sm:pt-[5.75rem] flex justify-center'>
            {/* 
                NOTE: Did this cause using "use client" (for currentTag state) on this
                page crashed the 'fs' and other imports from 'getSortedBlogsMetaData'
            */}
            <BlogPageContent blogTags={blogTags} blogPosts={blogPosts} />
        </div>
    )
}

export default Blogs;
