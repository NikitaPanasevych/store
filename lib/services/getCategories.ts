import { PostRequest } from '@/models/home.posts';

export default async function getCategory(param: string) {
	return await fetch(`http://localhost:3000/api/admin?type=${param}`, { cache: 'no-store' })
		.then((res) => {
			if (!res.ok) {
				throw new Error(res.statusText);
			}
			return res.json();
		})
		.catch((err) => console.error(err));
}
