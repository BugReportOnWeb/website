import Link from "next/link";
import Date from "./Date";
import { MetaData } from "@/types/Blog";

type BlogCardProps = {
    metaData: (MetaData & { id: string });
}

const BlogCard = ({ metaData }: BlogCardProps) => {
    return (
        <Link href={`/blogs/${metaData.id}`} key={metaData.id} className="group flex gap-4 items-start sm:gap-6">
            <Date
                className='min-w-[5rem] h-fit text-xs mt-[0.425rem] text-[#ededed]/80 transition-colors ease-in-out group-hover:text-[#ededed]/60'
                dateString={metaData.date}
            />
            <div >
                <h1 className='font-bold text-[1.375rem] text-[#ededed] transition-colors ease-in-out group-hover:text-[#ededed]/80'>{metaData.title}</h1>
                <p className='mt-0.5 text-sm leading-[26px] text-[#ededed]/80 transition-colors ease-in-out group-hover:text-[#ededed]/60'>{metaData.description}</p>
                <div className="mt-3 border-b border-[#e1e7ef]/40"></div>
            </div>
        </Link>
    )
}

export default BlogCard;
