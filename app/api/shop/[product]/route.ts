import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(req: any) {
	const productName = req.nextUrl.pathname.split('/')[3].replace(/-/g, ' ');

	const product = await prisma.product.findUnique({
		where: {
			name: productName,
		},
	});

	let json_response = {
		status: 'success',
		data: product,
	};
	return NextResponse.json(json_response);
}
