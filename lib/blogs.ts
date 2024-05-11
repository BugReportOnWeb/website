import fs from 'fs';
import path from 'path';

// TODO: Move all the types under tyeps directory
type TempMetadata = {
    title: string
    description: string;
    date: string;
    time: string;
    tags: string | string[];
}

type Metadata = Omit<TempMetadata, 'tags'> & { tags: string[] };

type BlogPost = {
    metadata: Metadata;
    slug: string;
    content: string;
}

const parseFrontmatter = (fileContent: string) => {
    let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
    let match = frontmatterRegex.exec(fileContent)
    let frontMatterBlock = match![1]
    let content = fileContent.replace(frontmatterRegex, '').trim()
    let frontMatterLines = frontMatterBlock.trim().split('\n')
    let metadata: Partial<TempMetadata> = {}

    frontMatterLines.forEach((line) => {
        let [key, value] = line.split(': ');
        // Remove quotes
        value = value.replace(/^['"](.*)['"]$/, '$1');
        metadata[key.trim() as keyof TempMetadata] = value as string;
    })

    const tags = metadata.tags;

    if (typeof (tags) === 'string') {
        let tagsValues = tags.split(', ');
        // Remove quotes and brackets
        tagsValues = tagsValues.map(value => value.replace(/\[*['"](.*)['"]\]*$/, '$1'));
        metadata.tags = tagsValues;
    }

    return { metadata: metadata as Metadata, content };
}

const getMDXFiles = (dir: string) => {
    return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

const readMDXFile = (filePath: string) => {
    let rawContent = fs.readFileSync(filePath, 'utf-8')
    return parseFrontmatter(rawContent)
}

const getMDXData = (dir: string) => {
    let mdxFiles = getMDXFiles(dir)

    return mdxFiles.map((file) => {
        let { metadata, content } = readMDXFile(path.join(dir, file))
        let slug = path.basename(file, path.extname(file))

        const blogPost: BlogPost = { metadata, slug, content };
        return blogPost
    })
}

const getBlogPosts = () => {
    const blogsDirectoryPath = path.join(process.cwd(), 'app', 'blogs', 'posts');
    const blogPosts = getMDXData(blogsDirectoryPath);

    const sortedBlogPosts = blogPosts.sort((a, b) => {
        if (
            new Date(a.metadata.date) > new Date(b.metadata.date)
        ) {
            return -1
        }
        return 1
    })

    return sortedBlogPosts;
}

const getBlogTags = (blogPosts: BlogPost[]) => {
    const allTags = blogPosts.map(post => post.metadata.tags);
    const allDistinctTags = ['All'];

    allTags.forEach(tagList => {
        tagList.forEach(tag => {
            if (!allDistinctTags.includes(tag)) {
                allDistinctTags.push(tag);
            }
        })
    })

    return allDistinctTags;
}

export type { Metadata, BlogPost };
export { getBlogPosts, getBlogTags, };
