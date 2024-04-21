type TagsProps = {
    tags: string[];
    currentTag: string;
    setCurrentTag: (tag: string) => void;
}

const Tags = ({ tags, currentTag, setCurrentTag }: TagsProps) => {
    return (
        <div className="flex gap-3 pb-3 border-b border-[#e1e7ef]/40 w-fit overflow-x-scroll">
            {tags.map((tag, index) => (
                <button
                    key={index}
                    className={`
                        flex items-center gap-2 transition-colors ease-in-out hover:text-[#ededed]/80 text-[0.8125rem]
                        ${tag === currentTag ? 'text-[#e1e7ef]/80 underline underline-offset-8 decoration-[#e1e7ef]' : 'text-[#ededed]/60 no-underline'} 
                    `}
                    onClick={() => setCurrentTag(tag)}
                >{tag}</button>
            ))}
        </div>
    )

}

export default Tags;
