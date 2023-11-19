import { Post, PostRequest } from '@/models/home.posts';

export default async function removeItem(req: any) {
	return await fetch('http://localhost:3000/api/admin/post', {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(req),
	})
		.then((res) => {
			if (!res.ok) {
				throw new Error(res.statusText);
			}
			return res.json();
		})
		.catch((err) => console.error(err));
}
