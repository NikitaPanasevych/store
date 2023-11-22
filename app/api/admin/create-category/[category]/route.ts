import prisma from '@/lib/prisma';
import { Categories } from '@/models/shop.categories';
import { NextResponse } from 'next/server';

export async function POST(req: any) {
	const data: Categories = await req.json();
	const query: 'grape' | 'country' | 'category' = req.nextUrl.pathname.split('/')[4].replace(/-/g, ' ');
	const { name } = data;

	try {
		const createData = {
			data: {
				name,
			},
		};

		switch (query) {
			case 'grape':
				await prisma.grape.create(createData);
				break;
			case 'country':
				await prisma.country.create(createData);
				break;
			default:
				await prisma.type.create(createData);
				break;
		}
		return NextResponse.json({ message: 'Category created successfully' });
	} catch (err) {
		console.log(err);
		return NextResponse.json({ message: 'Error', err });
	}
}

export async function DELETE(req: any) {
	const data: Categories = await req.json();
	const query: 'grape' | 'country' | 'category' = req.nextUrl.pathname.split('/')[4].replace(/-/g, ' ');
	const { id } = data;

	try {
		switch (query) {
			case 'grape':
				await prisma.grape.delete({ where: { id } });
				break;
			case 'country':
				await prisma.country.delete({ where: { id } });
				break;
			default:
				await prisma.type.delete({ where: { id } });
				break;
		}
		return NextResponse.json({ message: 'Category created successfully' });
	} catch (err) {
		console.log(err);
		return NextResponse.json({ message: 'Error', err });
	}
}

export async function PUT(req: any) {
	const data: Categories = await req.json();
	const query: 'grape' | 'country' | 'category' = req.nextUrl.pathname.split('/')[4].replace(/-/g, ' ');
	const { id, name } = data;
	try {
		switch (query) {
			case 'grape':
				await prisma.grape.update({ where: { id }, data: { id, name } });
				break;
			case 'country':
				await prisma.country.update({ where: { id }, data: { id, name } });
				break;
			default:
				await prisma.type.update({ where: { id }, data: { id, name } });
				break;
		}
		return NextResponse.json({ message: 'Category updated successfully' });
	} catch (err) {
		console.log(err);
		return NextResponse.json({ message: 'Error', err });
	}
}
