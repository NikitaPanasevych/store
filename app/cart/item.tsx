'use client';

import React, { use, useEffect, useState } from 'react';
import { addToCart, removeFromCart } from '@/redux/features/cartSlice';
import { useDispatch } from 'react-redux';
import { CnButton } from '@/components/ui/button';

const CartItem = (props: any) => {
	const { name, price, volume, image, id } = props.product;
	const { cartQuantity, auth } = props;
	const dispatch = useDispatch();

	const [cartQuantityState, setCartQuantityState] = useState(0);

	useEffect(() => {
		setCartQuantityState(cartQuantity);
	}, [cartQuantity]);

	const addToCartHandler = (product: any) => {
		auth ? props.addToCartAction(props.product) : dispatch(addToCart(product));
	};

	const removeFromCartHandler = (product: any) => {
		dispatch(removeFromCart(product));
	};

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
							<p className="my-auto">{cartQuantityState}</p>
							<CnButton
								variant="ghost"
								onClick={() => addToCartHandler(props.product)}
								type="button"
								className="text-5xl grid content-center text-green-400 hover:text-indigo-500"
							>
								+
							</CnButton>
							<p className=" min-w-[10rem] m-auto col-span-1">${price * cartQuantityState}</p>
						</div>
					</div>
					<p className=" text-2xl text-gray-500 mt-2">{volume} ml</p>
				</div>
			</div>
		</li>
	);
};

export default CartItem;
