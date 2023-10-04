import { ProductRequest } from '@/models/shop.product';
import { NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';

export async function GET(res: NextApiResponse<ProductRequest>) {
	const products = await prisma.product.findMany();
	let json_response = {
		status: 'success',
		data: products,
	};
	return NextResponse.json(json_response);
}
