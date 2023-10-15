import { ShopRequest } from '@/models/shop';

export default async function getShop(): Promise<ShopRequest> {
	const data = await fetch('http://localhost:3000/api/admin')
		.then((res) => {
			if (!res.ok) {
				throw new Error(res.statusText);
			}
			return res.json();
		})
		.catch((err) => console.error(err));
	return data;
}
