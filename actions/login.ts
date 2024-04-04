'use server';

import * as z from 'zod';
import { loginSchema } from '@/schemas/login.schema';
import { signIn } from '@/auth';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { AuthError } from 'next-auth';
import { generateToken } from '@/lib/tokens';
import { getUserByEmail } from '@/lib/db-queries/getUser';
import { sendVerificationEmail } from './sendVerificationEmail';

export const login = async (values: z.infer<typeof loginSchema>) => {
	const validatedFields = loginSchema.safeParse(values);

	if (!validatedFields.success) {
		throw new Error('Invalid fields');
	}

	const { email, password } = validatedFields.data;

	const existingUser = await getUserByEmail(email);

	if (!existingUser || !existingUser.email || !existingUser.password) {
		return {
			error: 'Invalid email or password',
		};
	}

	/*if (!existingUser.emailVerified) {
		const token = await generateToken(existingUser.email);
		await sendVerificationEmail(token.email, token.token);
		return {
			success: 'Confirmation email sent!',
		};
	}*/

	try {
		await signIn('credentials', {
			email,
			password,
			redirectTo: DEFAULT_LOGIN_REDIRECT,
		});
	} catch (error) {
		if (error instanceof AuthError) {
			switch (error.type) {
				case 'CredentialsSignin':
					return {
						error: 'Invalid credentials',
					};
				default:
					console.error(error);
					return {
						error: 'An error occurred',
					};
			}
		}
		throw error;
	}
};
