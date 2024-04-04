'use client';

import React from 'react';
import { addToCart, removeFromCart } from '@/redux/features/cartSlice';
import { useDispatch } from 'react-redux';
import { CnButton } from '@/components/ui/button';
import useCartData from '@/lib/hooks/useCartData';
import { ProductCardProps } from '../shop/product';

const CartItem = (props: any) => {
	const { id, name, price, volume, image } = props.product;

	return (
		<li key={id} className="flex py-6 ">
			<div className="h-72 flex-shrink-0 overflow-hidden rounded-md border-gray-200 ">
				<img src={image} alt={name} className="h-full w-full object-contain object-center" />
			</div>

			<div className="ml-4 flex flex-1 flex-col">
				<div>
					<div className="grid grid-cols-6 gap-40 text-3xl font-medium text-gray-900">
						<a className="my-auto col-span-2" href={'/shop/' + name.replace(/ /g, '-')}>
							{name?.length > 22 ? name?.slice(0, 22) + '...' : name}
						</a>
						<p className="text-3xl text-gray-900 text-center my-auto col-span-1">${price}</p>
						<div className="flex gap-16 col-span-2">
							<CnButton
								onClick={() => removeFromCartHandler(props.product)}
								type="button"
								variant="ghost"
								className="text-5xl text-active hover:text-indigo-500"
							>
								-
							</CnButton>
							<p className="my-auto">{props.cartQuantity}</p>
							<CnButton
								variant="ghost"
								onClick={() => addToCartHandler(props.product)}
								type="button"
								className="text-5xl grid content-center text-green-400 hover:text-indigo-500"
							>
								+
							</CnButton>
							<p className=" min-w-[10rem] m-auto col-span-1">${price * props.cartQuantity}</p>
						</div>
					</div>
					<p className=" text-2xl text-gray-500 mt-2">{volume} ml</p>
				</div>
			</div>
		</li>
	);
};

export default CartItem;
