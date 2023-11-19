import { ShopRequest } from '@/models/shop';

export default async function getShop() {
	const data = await fetch('http://localhost:3000/api/admin', { cache: 'no-store' })
		.then((res) => {
			return res.json();
		})
		.catch((err) => console.error(err));
	return data;
}
