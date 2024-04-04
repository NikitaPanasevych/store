import React from 'react';
import MyDrawer from '../drawer';
import { BsFillBagFill } from 'react-icons/bs';
import { Cart } from '../cart';

import CartQuantity from './cartQuantity';
import { auth } from '@/auth';

const HeaderCart = async () => {
	const session = await auth();
	const cart = session?.user.cart;

	return (
		<>
			<div>
				<MyDrawer anchor="right" buttonChildren={<BsFillBagFill />}>
					<Cart cart={cart} />
				</MyDrawer>
			</div>
			<CartQuantity cart={cart} />
		</>
	);
};

export default HeaderCart;
