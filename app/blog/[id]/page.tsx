import { getAllBlogIds, getBlogMetaData } from "@/lib/blogs";

interface BlogProp {
    params: {
        id: string;
    };
}

const generateStaticParams = () => {
    const ids = getAllBlogIds();
    return ids
}

const Blog = ({ params }: BlogProp) => {
    const blogMetaData = getBlogMetaData(params.id);

    return (
        <div className='h-full flex justify-center'>
            <div className='w-full px-5 max-w-4xl h-full absolute mt-24 sm:mt-36'>
                <div className='flex flex-col gap-3'>
                    <h1 className='font-extrabold text-4xl text-[#ededed]'>{blogMetaData.title}</h1>
                    <h1 className='text-sm text-[#ededed]/60'>{blogMetaData.date}</h1>
                </div>
                {/* Change here with markdown text */}
                <div className='leading-8 mt-8 flex flex-col gap-4'>
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.</p>
                    <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</p>
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself.</p>
                    <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</p>
                    <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</p>
                </div>
            </div>
        </div>
    )
}

export { generateStaticParams }
export default Blog;
