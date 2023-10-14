import { NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';

export async function GET() {
	const posts = await prisma.post.findMany();
	const products = await prisma.product.findMany();
	const types = await prisma.type.findMany();
	const grapes = await prisma.grape.findMany();
	const countries = await prisma.country.findMany();
	let json_response = {
		status: 'success',
		data: {
			posts,
			products,
			types,
			grapes,
			countries,
		},
	};
	return NextResponse.json(json_response);
}
