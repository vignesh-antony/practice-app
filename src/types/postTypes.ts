export interface PostType {
    userId: string;
    id: string;
    title: string;
    body: string;
}

export interface PostState {
    posts: PostType[];
    isFetching: boolean;
}
