import { ProductRequest } from '@/models/shop.product';

export default async function getProducts(): Promise<ProductRequest> {
	return await fetch('http://localhost:3000/api/shop')
		.then((res) => {
			if (!res.ok) {
				throw new Error(res.statusText);
			}
			return res.json();
		})
		.catch((err) => console.error(err));
}
