import prisma from '@/lib/prisma';

export const verificationTokenByEmail = async (email: string) => {
	try {
		const verificationToken = await prisma.verificationToken.findFirst({
			where: {
				email,
			},
		});
		return verificationToken;
	} catch {
		return null;
	}
};

export const verificationTokenByToken = async (token: string) => {
	try {
		const verificationToken = await prisma.verificationToken.findUnique({
			where: {
				token,
			},
		});
		return verificationToken;
	} catch {
		return null;
	}
};
