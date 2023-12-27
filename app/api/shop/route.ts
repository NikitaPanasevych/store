import { ProductsRequest } from '@/models/shop.product';
import { NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';

export async function GET(req: NextRequest) {
	let searchedTerm: string | null;
	if (req.nextUrl.searchParams.get('q')) {
		searchedTerm = req.nextUrl.searchParams.get('q');
	} else {
		searchedTerm = '';
	}
	const products = await prisma.product.findMany();
	//@ts-ignore
	const data = products.filter((product) => product.name.toLowerCase().includes(searchedTerm.toLowerCase()));
	let json_response = {
		status: 'success',
		data,
	};
	return NextResponse.json(json_response);
}
