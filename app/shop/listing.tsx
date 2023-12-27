import React from 'react';
import styles from './styles.module.scss';
import { ProductProps } from '@/models/shop.product';
import { Product } from './product';
import { getProducts } from '@/lib/services';

export default async function ProductsListing() {
	const products = await getProducts();

	return (
		<div className={styles.listing}>
			{products?.data.map((product: ProductProps) => {
				return (
					<Product
						name={product.name}
						quantity={product.quantity}
						price={product.price}
						volume={product.volume}
						image={product.image}
						categories={product.categories}
						key={product.id}
					/>
				);
			})}
		</div>
	);
}
