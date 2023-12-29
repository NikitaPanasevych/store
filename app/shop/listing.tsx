'use client';

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
				return <Product product={product} />;
			})}
		</div>
	);
}
