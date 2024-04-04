'use client';

import React from 'react';
import CartItem from './item';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const Table = (props: any) => {
	const { cart } = props;
	const reduxCart = useSelector((state: RootState) => state.cartReducer);

	const addToCartAction = async (product: any) => {
		props.addToCartAction(product);
	};

	return (
		<>
			{props.cart ? (
				cart.length > 0 ? (
					cart.map((item: any) => (
						<CartItem
							key={item.name}
							product={item.product}
							cartQuantity={item.cartQuantity}
							addToCartAction={addToCartAction}
							auth={true}
						/>
					))
				) : (
					<p>Your cart is empty</p>
				)
			) : reduxCart.length > 0 ? (
				reduxCart.map((item: any) => <CartItem key={item.name} product={item} cartQuantity={item.cartQuantity} />)
			) : (
				<p>Your cart is empty</p>
			)}
		</>
	);
};

export default Table;
