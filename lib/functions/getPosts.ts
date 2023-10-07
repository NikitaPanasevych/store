import { PostRequest } from '@/models/home.posts';

export default async function getPosts(): Promise<PostRequest> {
	return await fetch('http://localhost:3000/api/home')
		.then((res) => {
			if (!res.ok) {
				throw new Error(res.statusText);
			}
			return res.json();
		})
		.catch((err) => console.error(err));
}
