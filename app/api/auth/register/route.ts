import * as z from 'zod';
import bcrypt from 'bcrypt';
import prisma from '@/lib/prisma';

import { RegisterFormSchema } from '@/schemas/register.schema';
import { NextRequest, NextResponse } from 'next/server';
import { getUserByEmail } from '@/lib/db-queries/getUser';

export const POST = async (req: NextRequest) => {
	const values = await req.json();
	const validatedData = RegisterFormSchema.safeParse(values);

	if (!validatedData.success) {
		throw new Error('Invalid data');
	}

	const { email, password } = validatedData.data;
	const hashedPassword = await bcrypt.hash(password, 10);

	const existingUser = await getUserByEmail(email);

	if (existingUser) {
		throw new Error('User already exists');
	}

	await prisma.user.create({
		data: {
			email,
			password: hashedPassword,
		},
	});

	//TODO send email confirmation

	return NextResponse.json({
		status: 'success',
		message: 'User created',
	});
};
