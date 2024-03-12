'use client';

import React from 'react';
import styles from './styles.module.scss';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import CartItem from './item';

const Cart = () => {
	const cart = useSelector((state: RootState) => state.cartReducer);

	return (
		<main className={styles.cart}>
			<h1 className={styles.cart__title}>Your Cart</h1>

			<div className={styles.cart__container}>
				<div className={styles.cart__container__summary}>{/*summary goes here*/}</div>
				<ul role="list" className="-my-8s divide-y divide-gray-200">
					{cart.length > 0 ? (
						cart.map((item) => <CartItem key={item.name} product={item} />)
					) : (
						<p>Your cart is empty</p>
					)}
				</ul>
			</div>
		</main>
	);
};

export default Cart;
