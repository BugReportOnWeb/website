import fs from 'fs';
import path from 'path';

import { MetaData } from '@/types/Blog';

import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const blogsDirectoryPath = path.join(process.cwd(), 'blogs');

// Get all blogs metadata (sorted)
const getSortedBlogsMetaData = () => {
    const fileNames = fs.readdirSync(blogsDirectoryPath);

    const blogsMetaData = fileNames.map(fileName => {
        const id = fileName.replace(/\.md$/, '');
        const blogMetaData = getBlogMetaData(id);

        return blogMetaData;
    })

    return blogsMetaData.sort((firstBlog, secondBlog) => {
        if (firstBlog.date < secondBlog.date) return 1;
        return -1;
    });
}

// Get all blog ids
const getAllBlogIds = () => {
    const fileNames = fs.readdirSync(blogsDirectoryPath);

    const blogIds = fileNames.map(fileName => {
        const id = fileName.replace(/\.md$/, '');
        return { id };
    })

    return blogIds;
}

// Get specific blog metadata
const getBlogMetaData = (id: string) => {
    const filePath = path.join(blogsDirectoryPath, `${id}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf8');

    const matterMetaData = matter(fileContent).data as MetaData;
    const blogMetaData = { id, ...matterMetaData };

    return blogMetaData;
}

// Get specific blog HTML content
const getBlogContent = async (id: string) => {
    const filePath = path.join(blogsDirectoryPath, `${id}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf8');

    const matterContent = matter(fileContent).content;

    const rawContent = await remark()
        .use(html)
        .process(matterContent)

    const htmlContent = rawContent.toString();

    return { htmlContent };
}

const getBlogTags = (blogsMetaData: MetaData[]) => {
    const allTags = blogsMetaData.map(metaData => metaData.tags);
    const allDistinctTags = ['#All'];

    allTags.forEach(tagList => {
        tagList.forEach(tag => {
            if (!allDistinctTags.includes(`#${tag}`)) {
                allDistinctTags.push(`#${tag}`);
            }
        })
    })

    return allDistinctTags;
}

export {
    getSortedBlogsMetaData,
    getAllBlogIds,
    getBlogMetaData,
    getBlogContent,
    getBlogTags
};
