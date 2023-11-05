import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import { MetaData } from '@/types/Blog';

const blogsDirectoryPath = path.join(process.cwd(), 'blogs');

const getSortedBlogsMetaData = () => {
    const fileNames = fs.readdirSync(blogsDirectoryPath);

    const blogMetaData = fileNames.map(fileName => {
        const id = fileName.replace(/\.md$/, '');

        const filePath = path.join(blogsDirectoryPath, fileName);
        const fileContent = fs.readFileSync(filePath);

        // CHECK: Right way to fix optional fields?
        const matterMetaData = matter(fileContent).data as MetaData;
        const completeMetaData = { id, ...matterMetaData };

        return completeMetaData;
    })

    return blogMetaData.sort((firstBlog, secondBlog) => {
        if (firstBlog.date < secondBlog.date) return 1;
        return -1;
    });
}

export default getSortedBlogsMetaData;
