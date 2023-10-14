export default async function getProduct(slug: string) {
	return await fetch(`http://localhost:3000/api/shop/${slug}`)
		.then((res) => {
			if (!res.ok) {
				throw new Error(res.statusText);
			}
			return res.json();
		})
		.catch((err) => console.error(err));
}
