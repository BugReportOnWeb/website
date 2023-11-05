interface BlogMetaData {
    title: string;
    description: string;
    date: string;
}

interface Matter {
    content: string;
    data: BlogMetaData;
    isEmpty: boolean;
    excerpt: string
}

interface BlogData {
    id: string;
    matterResults: Matter;
}

export type { BlogData };
