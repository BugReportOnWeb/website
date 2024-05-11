import CustomMDX from "@/components/CustomMDX";
import Date from "@/components/Date";
import { getBlogPosts } from "@/lib/blogs";
import { notFound } from "next/navigation";

type BlogParamsProps = {
    params: {
        slug: string;
    };
}

// TODO: Understand this better
const generateMetadata = ({ params }: BlogParamsProps) => {
    let post = getBlogPosts().find((post) => post.slug === params.slug)
    if (!post) {
        return
    }

    let {
        title, date: publishedTime,
        description,
    } = post.metadata

    let ogImage = `https://devkaul.vercel.app/og?title=${encodeURIComponent(title)}`;

    return {
        title,
        description,
        authors: [{ name: 'Dev' }],
        openGraph: {
            title,
            description,
            type: 'article',
            publishedTime,
            url: `https://devkaul.vercel.app/blogs/${post.slug}`,
            images: [
                {
                    url: ogImage,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
        },
    }
}

const generateStaticParams = () => {
    const posts = getBlogPosts();

    const staticParams = posts.map(post => ({
        slug: post.slug
    }))

    return staticParams;
}

const Blog = async ({ params }: BlogParamsProps) => {
    const post = getBlogPosts().find(post => post.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <>
            {/* TODO: Learn what does this do? */}
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'BlogPosting',
                        headline: post.metadata.title,
                        datePublished: post.metadata.date,
                        dateModified: post.metadata.date,
                        description: post.metadata.description,
                        image: `/og?title=${encodeURIComponent(post.metadata.title)}`,
                        url: `https://devkaul.vercel.app/blogs/${post.slug}`,
                        author: {
                            '@type': 'Person',
                            name: 'Dev',
                        },
                    }),
                }}
            />

            <div className='h-full flex justify-center'>
                {/* TODO: Add a back button? */}
                <div className='w-full px-6 pb-24 max-w-3xl absolute mt-24 sm:mt-36'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='font-extrabold text-[2.625rem] text-[#ededed]'>{post.metadata.title}</h1>
                        <div>
                            <p>
                                <Date className='text-sm text-[#ededed]/60' dateString={post.metadata.date} />
                                <span className='text-sm text-[#ededed]/60'> at {post.metadata.time}</span>
                            </p>
                        </div>
                        <div className="flex gap-2">
                            {post.metadata.tags.map((tag, index) => (
                                <p key={index} className='border border-[#27272A] rounded-md px-2 py-1 w-fit text-xs text-[#ededed]/60 border border-'>#{tag}</p>
                            ))}
                        </div>
                    </div>
                    <div className='mt-7 leading-7 prose'>
                        <CustomMDX source={post.content} />
                    </div>
                </div>
            </div>
        </>
    )
}

export { generateStaticParams, generateMetadata };
export default Blog;
