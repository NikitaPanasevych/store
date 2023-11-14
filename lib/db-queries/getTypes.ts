import prisma from '../prisma';

export const getTypes = async () => {
	const types = await prisma.type.findMany();

	return {
		types,
	};
};
