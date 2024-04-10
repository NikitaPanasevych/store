'use client';

import React from 'react';
import useCart from '@/lib/hooks/useCart';

const Total = (props: any) => {
	const { cart } = props;

	return (
		<ul className=" divide-y divide-gray-200 ">
			<li className="py-8">
				<p className=" text-3xl">
					Subtotal: {cart ? cart.reduce((acc, item) => acc + item.product.price * item.cartQuantity, 0) : 0} $
				</p>
			</li>
			<li className="py-8">
				<p className=" text-3xl">Shipping: 0.00</p>
			</li>
			<li className="py-8">
				<p className=" text-3xl">
					Total: {cart ? cart.reduce((acc, item) => acc + item.product.price * item.cartQuantity, 0) : 0} $
				</p>
			</li>
		</ul>
	);
};

export default Total;
