'use client';

import React from 'react';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';

const Total = (props: any) => {
	const { cart } = props;
	const reduxCart = useSelector((state: RootState) => state.cartReducer);

	return (
		<ul className=" divide-y divide-gray-200 ">
			<li className="py-8">
				<p className=" text-3xl">
					Subtotal:{' '}
					{props.cart
						? cart.reduce((acc, item) => acc + item.price * item.cartQuantity, 0)
						: reduxCart.reduce((acc, item) => acc + item.price * item.cartQuantity, 0)}{' '}
					$
				</p>
			</li>
			<li className="py-8">
				<p className=" text-3xl">Shipping: 0.00</p>
			</li>
			<li className="py-8">
				<p className=" text-3xl">
					Total:
					{props.cart
						? cart.reduce((acc, item) => acc + item.price * item.cartQuantity, 0)
						: reduxCart.reduce((acc, item) => acc + item.price * item.cartQuantity, 0)}{' '}
					$
				</p>
			</li>
		</ul>
	);
};

export default Total;
