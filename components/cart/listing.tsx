import { CartProductProps } from '@/models/shop.product';
import React from 'react';
import Item from './item';

const Listing = (props: { cart: CartProductProps[] }) => {
	const { cart } = props;

	return (
		<>
			{cart.map((product: CartProductProps) => (
				<Item key={product.product.id} product={product.product} qnt={product.cartQuantity} />
			))}
		</>
	);
};

export default Listing;
