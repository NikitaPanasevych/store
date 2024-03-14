import Credentials from 'next-auth/providers/credentials';
import type { NextAuthConfig } from 'next-auth';
import { loginSchema } from './schemas/login.schema';
import { getUserByEmail } from './lib/db-queries/getUser';
import bcrypt from 'bcryptjs';

export default {
	providers: [
		Credentials({
			async authorize(credentials) {
				const validatedFields = loginSchema.safeParse(credentials);

				if (validatedFields.success) {
					const { email, password } = validatedFields.data;

					const user = await getUserByEmail(email);
					if (!user || !user.password) return null;

					const passwordsMatch = await bcrypt.compare(password, user.password);

					if (passwordsMatch) return user;
				}

				return null;
			},
		}),
	],
} satisfies NextAuthConfig;
