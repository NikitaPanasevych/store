import prisma from '../prisma';

export const getGrapes = async () => {
	const grapes = await prisma.grape.findMany();

	return {
		grapes,
	};
};
