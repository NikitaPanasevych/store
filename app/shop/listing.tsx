import React from 'react';
import styles from './styles.module.scss';
import { ProductProps } from '@/models/shop.product';
import { Product } from './product';
import { auth } from '@/auth';
import addToCart from '@/actions/addToCart';

export default async function ProductsListing({ products }: { products: ProductProps[] }) {
	const session = await auth();

	const addToCartAction = async (product: ProductProps, userId: any) => {
		'use server';
		await addToCart(product, userId);
	};

	return (
		<div className={styles.listing}>
			{products?.map((product: ProductProps) => {
				return <Product product={product} session={session} addToCartAction={addToCartAction} />;
			})}
		</div>
	);
}
