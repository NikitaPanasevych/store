export interface Post {
	id?: string;
	title: string;
	content: string;
	image: string;
}

export interface PostRequest {
	message: string;
	posts: Post[];
}
