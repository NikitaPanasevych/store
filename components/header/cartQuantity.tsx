'use client';

import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const CartQuantity = (props: any) => {
	const reduxCart = useSelector((state: RootState) => state.cartReducer);

	return (
		<span className={styles.header__right__qty}>
			{props.cart
				? props.cart.reduce((acc, item) => {
						return acc + item.cartQuantity;
				  }, 0)
				: reduxCart.reduce((acc, item) => {
						return acc + item.cartQuantity;
				  }, 0)}
		</span>
	);
};

export default CartQuantity;
