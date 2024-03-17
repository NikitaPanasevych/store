'use server';

import prisma from '../lib/prisma';
import { getUserByEmail } from '@/lib/db-queries/getUser';
import { verificationTokenByToken } from '@/data/verification-token';

export const verifyEmail = async (token: string) => {
	const verificationToken = await verificationTokenByToken(token);

	if (!verificationToken) {
		return { error: 'Invalid token' };
	}

	const hasExpired = new Date() > new Date(verificationToken.expires);

	if (hasExpired) {
		return { error: 'Token has expired' };
	}

	const user = await getUserByEmail(verificationToken.email);

	if (!user) {
		return { error: 'User not found' };
	}

	await prisma.user.update({
		where: {
			id: user.id,
		},
		data: {
			emailVerified: new Date(),
			email: verificationToken.email,
		},
	});

	await prisma.verificationToken.delete({
		where: {
			token,
		},
	});

	return { success: 'Email verified' };
};
