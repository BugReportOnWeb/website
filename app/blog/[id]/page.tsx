import Date from "@/components/Date";
import {
    getAllBlogIds,
    getBlogContent,
    getBlogMetaData
} from "@/lib/blogs";
import { Metadata } from "next";

interface BlogProps {
    params: {
        id: string;
    };
}

const generateMetadata = ({ params }: BlogProps) => {
    const blogMetaData = getBlogMetaData(params.id);

    const metaData: Metadata = {
        title: blogMetaData.title,
        description: blogMetaData.description,
        authors: [{ name: "Dev" }]
    }

    return metaData;
}

const generateStaticParams = () => {
    const ids = getAllBlogIds();
    return ids
}

const Blog = async ({ params }: BlogProps) => {
    const blogMetaData = getBlogMetaData(params.id);
    const blogContent = await getBlogContent(params.id);

    return (
        <div className='h-full flex justify-center'>
            {/* TODO: Add a back button? */}
            <div className='w-full px-6 pb-24 max-w-3xl absolute mt-24 sm:mt-36'>
                <div className='flex flex-col gap-3'>
                    <h1 className='font-extrabold text-[2.625rem] text-[#ededed]'>{blogMetaData.title}</h1>
                    <div>
                        <p>
                            <Date className='text-sm text-[#ededed]/60' dateString={blogMetaData.date} />
                            <span className='text-sm text-[#ededed]/60'> at {blogMetaData.time}</span>
                        </p>
                    </div>
                    <div className="flex gap-2">
                        {blogMetaData.tags.map((tag, index) => (
                            <p key={index} className='border border-[#27272A] rounded-md px-2 py-1 w-fit text-xs text-[#ededed]/60 border border-'>#{tag}</p>
                        ))}
                    </div>
                </div>
                <div
                    className='mt-7 leading-7 parsedown'
                    dangerouslySetInnerHTML={{ __html: blogContent.htmlContent }}
                />
            </div>
        </div>
    )
}

export { generateStaticParams, generateMetadata }
export default Blog;
