'use client';

import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import useCart from '@/lib/hooks/useCart';
import { CartProductProps } from '@/models/shop.product';

const CartQuantity = (props: { cart: CartProductProps[] }) => {
	const { cart } = props;

	return (
		<span className={styles.header__right__qty}>
			{cart.reduce((acc, item) => {
				return acc + item.cartQuantity;
			}, 0)}
		</span>
	);
};

export default CartQuantity;
