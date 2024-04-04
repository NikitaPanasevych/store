'use client';

import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import useCartData from '@/lib/hooks/useCartData';

const CartQuantity = () => {
	const { cart, loading, error } = useCartData();

	return (
		<span className={styles.header__right__qty}>
			{cart.reduce((acc, item) => {
				return acc + item.cartQuantity;
			}, 0)}
		</span>
	);
};

export default CartQuantity;
