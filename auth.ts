import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';

import authConfig from './auth.config';
import prisma from './lib/prisma';
import { getUserById } from './lib/db-queries/getUser';
import { UserRole } from '@prisma/client';

export const {
	handlers: { GET, POST },
	auth,
	signIn,
	signOut,
} = NextAuth({
	events: {
		linkAccount: async ({ user }) => {
			await prisma.user.update({
				where: { id: user.id },
				data: { emailVerified: new Date() },
			});
		},
	},
	callbacks: {
		async signIn({ user, account }) {
			//Prevent sign in if the user is not verified
			if (account?.provider !== 'credentials') {
				return true;
			}

			//const existingUser = await getUserById(user.id);

			/*if (!existingUser?.emailVerified) {
				return false;
			}*/

			return true;
		},
		async session({ token, session }) {
			if (token.sub && session.user) {
				session.user.id = token.sub;
			}
			if (token.role && session.user) {
				session.user.role = token.role as UserRole;
			}
			if (token.cart && session.user) {
				session.user.cart = token.cart as any;
			}

			return session;
		},
		async jwt({ token }) {
			if (!token.sub) {
				return token;
			}
			const existingUser = await getUserById(token.sub);

			if (!existingUser) {
				return token;
			}
			token.role = existingUser.role;
			token.cart = existingUser.cart;

			return token;
		},
	},
	adapter: PrismaAdapter(prisma),
	session: { strategy: 'jwt' },
	...authConfig,
});
