import { PostRequest } from '@/models/home.posts';

export default async function getPosts(): Promise<PostRequest> {
	const response = await fetch('http://localhost:3000/api/admin/post', { cache: 'no-store' });
	const posts = await response.json();
	return posts;
}
