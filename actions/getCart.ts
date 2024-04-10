'use server';

import prisma from '@/lib/prisma';

const getCartServerAction = async (userId: string | undefined) => {
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

export default getCartServerAction;
