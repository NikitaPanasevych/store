import prisma from '@/lib/prisma';
import { Post } from '@/models/home.posts';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
	const data: Post = await req.json();
	const { title, content, image } = data;
	try {
		const post = await prisma.post.create({
			data: {
				title,
				content,
				image,
			},
		});
		return NextResponse.json({ message: 'Post created successfully', post });
	} catch (err) {
		return NextResponse.json({ message: 'Error', err });
	}
}
