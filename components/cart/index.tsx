import { CartProductProps } from '@/models/shop.product';
import Link from 'next/link';
import getCartServerAction from '@/actions/getCart';
import { auth } from '@/auth';
import Listing from './listing';
import { Suspense } from 'react';

export const Cart = async () => {
	let cart: CartProductProps[] = [];
	const session = await auth();
	if (!session) {
		cart = [];
	} else {
		cart = await getCartServerAction(session.user.id);
	}

	return (
		<div className="flex h-full flex-col overflow-y-scroll w-[50rem] bg-white shadow-xl">
			<div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
				<div className="flex items-start justify-between">
					<h1 className="text-3xl font-medium text-gray-900">Shopping cart</h1>
					<div className="ml-3 flex h-7 items-center">
						<Link href="/cart" className="relative text-xl -m-2 p-2 text-active ">
							<span className="absolute -inset-0.5" />
							<span className="">View cart</span>
						</Link>
					</div>
				</div>

				<div className="mt-8">
					<div className="flow-root">
						<ul role="list" className="-my-6 divide-y divide-gray-200">
							<Suspense fallback={<div>Loading...</div>}>
								<Listing cart={cart} />
							</Suspense>
						</ul>
					</div>
				</div>
			</div>

			<div className="border-t border-gray-200 px-4 py-6 sm:px-6">
				<div className="flex justify-between text-2xl font-medium text-gray-900">
					<p>Subtotal</p>
					<p>
						${cart.reduce((acc: number, product: any) => acc + product.product.price * product.cartQuantity, 0)}
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
