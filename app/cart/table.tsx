'use client';

import CartItem from './item';
import { CartProductProps } from '@/models/shop.product';

const Table = async (props: { cart: CartProductProps[] }) => {
	const { cart } = props;

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
