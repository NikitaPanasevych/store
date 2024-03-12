import React from 'react';
import styles from './styles.module.scss';
import { ProductProps } from '@/models/shop.product';
import { Product } from './product';

export default function ProductsListing({ products }: { products: ProductProps[] }) {
	return (
		<div className={styles.listing}>
			{products?.map((product: ProductProps) => {
				return <Product product={product} />;
			})}
		</div>
	);
}
