import { getBlogTags, getSortedBlogsMetaData } from "@/lib/blogs";
import BlogPageContent from "@/components/BlogPageContent";

const Blogs = () => {
    const blogsMetaData = getSortedBlogsMetaData();
    const blogTags = getBlogTags(blogsMetaData);

    return (
        <div className='h-full flex justify-center'>
            {/* 
                NOTE: Did this cause using "use client" (for currentTag state) on this
                page crashed the 'fs' and other imports from 'getSortedBlogsMetaData'
            */}
            <BlogPageContent blogTags={blogTags} blogsMetaData={blogsMetaData} />
        </div>
    )
}

export default Blogs;
