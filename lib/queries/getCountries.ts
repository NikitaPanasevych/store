import prisma from '../prisma';

export const getCountries = async () => {
	const countries = await prisma.country.findMany();

	return {
		countries,
	};
};
