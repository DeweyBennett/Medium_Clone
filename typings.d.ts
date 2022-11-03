export interface Post {
    _id: string;
    _createdAt: string;
    title: string;
    _description: string;
    mainImage: {
        assets: {
            url: string;
        }
    };
    slug: {
        current: string;
    };
    author: {
        name: string;
        image: string;
    }
    comments: [Comment];
    body: [object]
}

export interface Comment {
    approved: boolean;
    comment: string;
    email: string;
    name: string;
    post: {
        _ref: string;
        _type: string;
    };
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _type: string;
    _updatedAt: string;
}