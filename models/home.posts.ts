export interface Post {
	id?: string;
	title: string;
	content: string;
	image: string;
}

export interface PostRequest {
	status: string;
	data: Post[];
}
