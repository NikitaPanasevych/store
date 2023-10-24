import prisma from '../prisma';

export const getAllCategories = async () => {
	const types = await prisma.type.findMany();
	const grapes = await prisma.grape.findMany();
	const countries = await prisma.country.findMany();

	return {
		types,
		grapes,
		countries,
	};
};
