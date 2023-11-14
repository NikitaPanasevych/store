import prisma from '../prisma';

export const getAll = async () => {
	const posts = await prisma.post.findMany();
	const products = await prisma.product.findMany();
	const types = await prisma.type.findMany();
	const grapes = await prisma.grape.findMany();
	const countries = await prisma.country.findMany();

	return {
		posts,
		products,
		types,
		grapes,
		countries,
	};
};
