'use client';

import React from 'react';
import MyDrawer from '../drawer';
import { BsFillBagFill } from 'react-icons/bs';
import { Cart } from '../cart';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const HeaderCart = () => {
	const cart = useSelector((state: RootState) => state.cartReducer);

	return (
		<>
			<div>
				<MyDrawer anchor="right" buttonChildren={<BsFillBagFill />}>
					<Cart />
				</MyDrawer>
			</div>
			<span className={styles.header__right__qty}>
				{cart.reduce((acc, item) => {
					return acc + item.cartQuantity;
				}, 0)}
			</span>
		</>
	);
};

export default HeaderCart;
