'use server';

import { auth } from '@/auth';
import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

const removeFromCartServerAction = async (product: any) => {
	const session = await auth();
	if (!session) {
		return {
			error: 'You must be logged in to add items to cart',
		};
	}
	const cartItem = await prisma.cartItem.findFirst({
		where: {
			userId: session.user.id,
			productId: product.id,
		},
	});
	if (!cartItem) {
		return {
			error: 'Item not found in cart',
		};
	}
	if (cartItem.cartQuantity > 1) {
		try {
			await prisma.cartItem.update({
				where: {
					id: cartItem.id,
				},
				data: {
					cartQuantity: cartItem.cartQuantity - 1,
				},
			});
			revalidatePath('/cart');
			return {
				success: 'Item added to cart',
			};
		} catch (e) {
			console.log(e);
			return {
				error: 'Something went wrong while increasing quantity of item in cart',
			};
		}
	}
	try {
		await prisma.cartItem.delete({
			where: {
				id: cartItem.id,
			},
		});
		revalidatePath('/cart');
		return {
			success: 'Item removed from cart',
		};
	} catch (e) {
		console.log(e);
		return {
			error: e,
		};
	}
};

export default removeFromCartServerAction;
