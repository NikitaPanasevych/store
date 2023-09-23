'use client';

import { AppContext } from '@/context/app.context';
import React, { useContext } from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

export const Cart = () => {
	const { miniCartOpen, setMiniCart } = useContext(AppContext);

	return (
		<>
			<SwipeableDrawer
				anchor={'right'}
				open={miniCartOpen}
				onClose={() => {
					setMiniCart(false);
				}}
				onOpen={() => {
					console.log('open');
				}}
			>
				<h1>cart</h1>
			</SwipeableDrawer>
		</>
	);
};
