import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import { MetaData } from '@/types/Blog';

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
        const id = fileName.replace('/\.md$/', '');
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

export { 
    getSortedBlogsMetaData,
    getAllBlogIds,
    getBlogMetaData
};
