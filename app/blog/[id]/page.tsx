import { getAllBlogIds, getBlogContent, getBlogMetaData } from "@/lib/blogs";

interface BlogProp {
    params: {
        id: string;
    };
}

const generateStaticParams = () => {
    const ids = getAllBlogIds();
    return ids
}

const Blog = async ({ params }: BlogProp) => {
    const blogMetaData = getBlogMetaData(params.id);
    const blogContent = await getBlogContent(params.id);

    return (
        <div className='h-full flex justify-center'>
            <div className='w-full px-6 pb-32 max-w-4xl absolute mt-24 sm:mt-36'>
                <div className='flex flex-col gap-3'>
                    <h1 className='font-extrabold text-4xl text-[#ededed]'>{blogMetaData.title}</h1>
                    <h1 className='text-sm text-[#ededed]/60'>{blogMetaData.date}</h1>
                </div>
                <div
                    className='mt-10 parsedown'
                    dangerouslySetInnerHTML={{ __html: blogContent.htmlContent }}
                />
            </div>
            {/* TODO: Add a back button? */}
        </div>
    )
}

export { generateStaticParams }
export default Blog;
