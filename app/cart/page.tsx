import React, { Suspense } from 'react';
import styles from './styles.module.scss';
import { CnButton } from '@/components/ui/button';
import Link from 'next/link';
import Table from './table';
import Total from './total';
import { auth } from '@/auth';
import getCartServerAction from '@/actions/getCart';
import { CartProductProps } from '@/models/shop.product';

const Cart = async () => {
	let cart: CartProductProps[] = [];
	const session = await auth();
	if (!session) {
		cart = [];
	} else {
		cart = await getCartServerAction(session.user.id);
	}

	return (
		<main className={styles.cart}>
			<h1 className={styles.cart__title}>Your Cart</h1>
			<div className=" grid grid-cols-3 gap-20">
				<ul role="list" className="-my-8s divide-y divide-gray-200 col-span-2 max-h-[600px] overflow-auto p-8">
					<li className="grid grid-cols-6  text-3xl font-bold my-2">
						<p className="col-span-2 text-center">Product</p>
						<p className="col-span-1 text-right">Price</p>
						<p className="col-span-2 text-center">Quantity</p>
						<p className="col-span-1">Total</p>
					</li>

					<Suspense fallback={<div>Loading...</div>}>
						<Table cart={cart} />
					</Suspense>
				</ul>
				<div className=" grid h-[400px] bg-light shadow-2xl w-[400px] col-span-1 rounded-xl p-14 pb-8 border-2">
					<h2 className=" text-4xl font-bold text-center">Order Summary</h2>
					<Total cart={cart} />
					<Link href="/checkout">
						<CnButton className="w-full">Checkout</CnButton>
					</Link>
				</div>
			</div>
		</main>
	);
};

export default Cart;
function getCartSetverAction(id: string | undefined) {
	throw new Error('Function not implemented.');
}
