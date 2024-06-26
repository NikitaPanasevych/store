'use server';

import { auth } from '@/auth';
import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export default async function addToCartServerAction(product: any) {
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
	if (cartItem) {
		try {
			await prisma.cartItem.update({
				where: {
					id: cartItem.id,
				},
				data: {
					cartQuantity: cartItem.cartQuantity + 1,
				},
			});
			revalidatePath('/cart');
			return;
		} catch (e) {
			console.log(e);
			return {
				error: 'Something went wrong while increasing quantity of item in cart',
			};
		}
	}
	try {
		await prisma.cartItem.create({
			data: {
				userId: session.user.id,
				productId: product.id,
				cartQuantity: 1,
			},
		});

		revalidatePath('/cart');
		return;
	} catch (e) {
		console.log(e);
		return {
			error: e,
		};
	}
}
