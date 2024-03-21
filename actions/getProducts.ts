'use server';

import prisma from '@/lib/prisma';

const getProducts = async () => {
	return await prisma.product.findMany();
};

export default getProducts;
