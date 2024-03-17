'use server';

import * as z from 'zod';
import bcrypt from 'bcrypt';
import prisma from '@/lib/prisma';

import { RegisterFormSchema } from '@/schemas/register.schema';
import { getUserByEmail } from '@/lib/db-queries/getUser';
import { generateToken } from '@/lib/tokens';
import { sendVerificationEmail } from './sendVerificationEmail';

export const register = async (values: z.infer<typeof RegisterFormSchema>) => {
	const validatedData = RegisterFormSchema.safeParse(values);

	if (!validatedData.success) {
		return { error: 'Invalid fields!' };
	}

	const { email, password } = validatedData.data;
	const hashedPassword = await bcrypt.hash(password, 10);

	const existingUser = await getUserByEmail(email);

	if (existingUser) {
		return { error: 'Email already in use!' };
	}

	await prisma.user.create({
		data: {
			email,
			password: hashedPassword,
		},
	});

	const token = await generateToken(email);
	await sendVerificationEmail(token.email, token.token);
	return { success: 'Confirmation email sent!' };
};
