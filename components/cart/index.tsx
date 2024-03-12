'use client';

import { CartProductProps } from '@/models/shop.product';
import { removeFromCart } from '@/redux/features/cartSlice';
import { RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';

export const Cart = () => {
	const cart = useSelector((state: RootState) => state.cartReducer);
	const dispatch = useDispatch();

	return (
		<div className="flex h-full flex-col overflow-y-scroll min-w-[35rem] bg-white shadow-xl">
			<div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
				<div className="flex items-start justify-between">
					<h1 className="text-3xl font-medium text-gray-900">Shopping cart</h1>
					<div className="ml-3 flex h-7 items-center">
						<button type="button" className="relative -m-2 p-2 text-gray-400 hover:text-gray-500">
							<span className="absolute -inset-0.5" />
							<span className="sr-only">Close panel</span>X
						</button>
					</div>
				</div>

				<div className="mt-8">
					<div className="flow-root">
						<ul role="list" className="-my-6 divide-y divide-gray-200">
							{cart.map((product: CartProductProps) => (
								<li key={product.id} className="flex py-6">
									<div className="h-40 w-40 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
										<img
											src={product.image}
											alt={product.name}
											className="h-full w-full object-contain object-center"
										/>
									</div>

									<div className="ml-4 flex flex-1 flex-col">
										<div>
											<div className="flex justify-between text-xl font-medium text-gray-900">
												<h3>
													<a href={'/shop/' + product.name.replace(/ /g, '-')}>{product.name}</a>
												</h3>
												<p className="ml-4">{product.price} $</p>
											</div>
											<p className=" text-lg text-gray-500">{product.volume} ml</p>
										</div>
										<div className="flex flex-1 items-end justify-between text-xl">
											<p className="text-gray-500">Quantity {product.cartQuantity}</p>

											<div className="flex">
												<button type="button" className="font-medium text-active hover:text-indigo-500">
													Remove
												</button>
											</div>
										</div>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>

			<div className="border-t border-gray-200 px-4 py-6 sm:px-6">
				<div className="flex justify-between text-2xl font-medium text-gray-900">
					<p>Subtotal</p>
					<p>
						$
						{cart.reduce(
							(acc: number, product: CartProductProps) => acc + product.price * product.cartQuantity,
							0
						)}
					</p>
				</div>
				<p className="mt-0.5 text-lg text-gray-500">Shipping and taxes calculated at checkout.</p>
				<div className="mt-6">
					<a
						href="#"
						className="flex items-center justify-center rounded-md border border-transparent bg-dark transition-all delay-150 ease-in-out   px-6 py-3 text-2xl font-medium text-white shadow-md hover:bg-light hover:text-dark duration-200"
					>
						Checkout
					</a>
				</div>
				<div className="mt-6 flex justify-center text-center text-xl text-gray-500">
					<p>
						or{' '}
						<button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
							Continue Shopping
							<span aria-hidden="true"> &rarr;</span>
						</button>
					</p>
				</div>
			</div>
		</div>
	);
};
