import { Post } from '@/models/home.posts';
import { NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';

export async function GET(res: NextApiResponse<Post[]>) {
	const posts = await prisma.post.findMany();
	let json_response = {
		status: 'success',
		data: posts,
	};
	return NextResponse.json(json_response);
}
