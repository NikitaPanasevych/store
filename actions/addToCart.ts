'use server';

import prisma from '@/lib/prisma';
import { ProductProps } from '@/models/shop.product';

export default async function addToCartAction(product: any, userId: any) {
	const cartItem = await prisma.cartItem.findFirst({
		where: {
			userId: userId,
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
			console.log('Item added to cart');
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
		await prisma.cartItem.create({
			data: {
				userId: userId,
				cartQuantity: 1,
				productId: product.id,
			},
		});
		return {
			success: 'Item added to cart',
		};
	} catch (e) {
		console.log(e);
		return {
			error: e,
		};
	}
}
