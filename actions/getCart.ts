'use server';

import prisma from '@/lib/prisma';

const getCartAction = async (userId: string | undefined) => {
	const cart = await prisma.cartItem.findMany({
		where: {
			userId: userId,
		},
		include: {
			product: true,
		},
	});
	return cart;
};

export default getCartAction;
