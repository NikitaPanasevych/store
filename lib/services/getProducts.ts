import { ProductsRequest } from '@/models/shop.product';

export default async function getProducts(): Promise<ProductsRequest> {
	const data = await fetch('http://localhost:3000/api/shop', { cache: 'no-store' })
		.then((res) => {
			if (!res.ok) {
				throw new Error(res.statusText);
			}
			return res.json();
		})
		.catch((err) => console.error(err));
	return data;
}
