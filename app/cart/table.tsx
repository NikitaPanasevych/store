'use client';

import React from 'react';
import CartItem from './item';
import useCartData from '@/lib/hooks/useCartData';
import Loader from '@/components/loadings/loader';
import { CartProductProps } from '@/models/shop.product';

const Table = () => {
	const { cart, loading, error } = useCartData();

	if (error) return <p>Error while fetching data</p>;

	if (loading) return <Loader />;

	return (
		<>
			{cart.length > 0 ? (
				cart.map((item: CartProductProps) => (
					<CartItem key={item.product.name} product={item.product} cartQuantity={item.cartQuantity} />
				))
			) : (
				<p>Your cart is empty</p>
			)}
		</>
	);
};

export default Table;
