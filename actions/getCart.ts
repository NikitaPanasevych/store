'use server';

import prisma from '@/lib/prisma';

const getCart = async (userId: string) => {
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

export default getCart;
