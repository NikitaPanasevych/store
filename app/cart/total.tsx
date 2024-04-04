'use client';

import React from 'react';
import useCartData from '@/lib/hooks/useCartData';

const Total = () => {
	const { cart, loading, error } = useCartData();

	return (
		<ul className=" divide-y divide-gray-200 ">
			<li className="py-8">
				<p className=" text-3xl">
					Subtotal: {cart.reduce((acc, item) => acc + item.product.price * item.cartQuantity, 0)} $
				</p>
			</li>
			<li className="py-8">
				<p className=" text-3xl">Shipping: 0.00</p>
			</li>
			<li className="py-8">
				<p className=" text-3xl">
					Total:
					{cart.reduce((acc, item) => acc + item.product.price * item.cartQuantity, 0)} $
				</p>
			</li>
		</ul>
	);
};

export default Total;
