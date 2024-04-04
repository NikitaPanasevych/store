'use client';

import React from 'react';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';

const Summary = () => {
	const cart = useSelector((state: RootState) => state.cartReducer);

	return (
		<div className=" p-10 max-h-[840px] w-full">
			<h2 className=" text-4xl font-bold">Order Details</h2>
			<div className=" mt-5">
				<ul className=" mt-3 text-2xl divide-y-2 divide-gray-200 max-h-[550px] overflow-y-auto">
					{cart.map((item) => (
						<li key={item.id} className="flex py-6 ">
							<div className="h-48 flex-shrink-0 overflow-hidden rounded-md border-gray-200 ">
								<img src={item.image} alt={item.name} className="h-full w-full object-contain object-center" />
							</div>
							<div className="ml-4 flex flex-1 flex-col">
								<div>
									<div className="flex justify-between gap-40 text-2xl font-medium text-gray-900">
										<a className="my-auto " href={'/shop/' + item.name.replace(/ /g, '-')}>
											{item.name.length > 35 ? item.name.slice(0, 35) + '...' : item.name}
										</a>

										<p className="text-2xl text-gray-900 text-center min-w-[120px] col-span-1 ">
											{item.price}$
										</p>
									</div>
									<p className=" text-xl text-gray-500 mt-2">{item.volume} ml</p>
									<p className=" text-gray-500 text-xl mt-2">Quantity: {item.cartQuantity}</p>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
			<div className=" grid grid-rows-3 gap-10 p-2 py-10 border-b-2 border-t-2 border-gray-200">
				<div className="flex justify-between text-2xl font-medium text-gray-900">
					<p>Subtotal</p>
					<p>{cart.reduce((acc, item) => acc + item.cartQuantity * item.price, 0)}$</p>
				</div>
				<div className="flex justify-between text-2xl font-medium  text-gray-900">
					<p>Shipping</p>
					<p>Free</p>
				</div>
				<div className="flex justify-between text-2xl font-medium  text-gray-900">
					<p>Total</p>
					<p>{cart.reduce((acc, item) => acc + item.cartQuantity * item.price, 0)}$</p>
				</div>
			</div>
			<div className=" mt-8 p-2 font-medium flex justify-between text-3xl">
				<p>Total</p>
				<p className=" text-active font-bold">
					{cart.reduce((acc, item) => acc + item.cartQuantity * item.price, 0)}$
				</p>
			</div>
		</div>
	);
};

export default Summary;
