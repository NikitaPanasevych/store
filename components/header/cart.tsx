import React from 'react';
import MyDrawer from '../drawer';
import { BsFillBagFill } from 'react-icons/bs';
import { Cart } from '../cart';
import CartQuantity from './cartQuantity';
import { CartProductProps } from '@/models/shop.product';
import { auth } from '@/auth';
import getCartServerAction from '@/actions/getCart';

const HeaderCart = async () => {
	let cart: CartProductProps[] = [];
	const session = await auth();
	if (!session) {
		cart = [];
	} else {
		cart = await getCartServerAction(session.user.id);
	}

	return (
		<>
			<div>
				<MyDrawer anchor="right" buttonChildren={<BsFillBagFill />}>
					<Cart />
				</MyDrawer>
			</div>
			<CartQuantity cart={cart} />
		</>
	);
};

export default HeaderCart;
