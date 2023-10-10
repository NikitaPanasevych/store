import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import Credentials from 'next-auth/providers/credentials';

const prisma = new PrismaClient();

export const AuthOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [],
};

export default NextAuth(AuthOptions);
