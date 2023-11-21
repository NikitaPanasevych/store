import { Post, PostRequest } from '@/models/home.posts';

const fetchDelete = async (itemToDelete: any, route: string) => {
	console.log(itemToDelete, route);
	return await fetch(`http://localhost:3000/api/admin/${route}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(itemToDelete),
	})
		.then((res) => {
			if (!res.ok) {
				throw new Error(res.statusText);
			}
			return res.json();
		})
		.catch((err) => console.error(err));
};

export default async function removeItem(itemToDelete: any, nameOfCollection: string) {
	console.log(itemToDelete, nameOfCollection);
	switch (nameOfCollection) {
		case 'posts':
			return await fetchDelete(itemToDelete, 'post');
		case 'products':
			return await fetchDelete(itemToDelete, 'product');
		case 'grapes':
			return await fetchDelete(itemToDelete, 'create-category/grape');
		case 'countries':
			return await fetchDelete(itemToDelete, 'create-category/country');
		case 'types':
			return await fetchDelete(itemToDelete, 'create-category/type');
	}
}
