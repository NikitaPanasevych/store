import React from 'react';
import MyDrawer from '../drawer';
import { BsFillBagFill } from 'react-icons/bs';
import { Cart } from '../cart';

import CartQuantity from './cartQuantity';
import { auth } from '@/auth';

const HeaderCart = async () => {
	return (
		<>
			<div>
				<MyDrawer anchor="right" buttonChildren={<BsFillBagFill />}>
					<Cart />
				</MyDrawer>
			</div>
			<CartQuantity />
		</>
	);
};

export default HeaderCart;
