import prisma from '../prisma';

export const getUserByEmail = async (email: string) => {
	try {
		const user = await prisma.user.findUnique({
			where: {
				email,
			},
			include: {
				cart: true,
			},
		});
		return user;
	} catch {
		return null;
	}
};

export const getUserById = async (id: string) => {
	try {
		const user = await prisma.user.findUnique({
			where: {
				id,
			},
			include: {
				cart: {
					include: {
						product: true,
					},
				},
			},
		});
		return user;
	} catch {
		return null;
	}
};
