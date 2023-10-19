import prisma from '@/lib/prisma';
import { Categories } from '@/models/shop.categories';
import { NextResponse } from 'next/server';

export async function POST(req: any) {
	const data: Categories = await req.json();
	const query: 'grape' | 'country' | 'category' = req.nextUrl.pathname.split('/')[4].replace(/-/g, ' ');
	const { name } = data;

	try {
		if (query === 'grape') {
			await prisma.grape.create({
				data: {
					name,
				},
			});
		} else if (query === 'country') {
			await prisma.country.create({
				data: {
					name,
				},
			});
		} else {
			await prisma.type.create({
				data: {
					name,
				},
			});
		}
		return NextResponse.json({ message: 'Category created successfully' });
	} catch (err) {
		console.log(err);
		return NextResponse.json({ message: 'Error', err });
	}
}
