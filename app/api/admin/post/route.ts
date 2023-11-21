import prisma from '@/lib/prisma';
import { Post } from '@/models/home.posts';
import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';
import { transformCloudinaryUrl } from '@/lib/functions/transformCloudinaryURL';

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET() {
	try {
		const posts = await prisma.post.findMany();
		return NextResponse.json({ message: 'Posts fetched successfully', posts });
	} catch (err) {
		return NextResponse.json({ message: 'Error', err });
	}
}

export async function POST(req: Request) {
	const data: Post = await req.json();
	const { title, content, image } = data;
	const options = {
		use_filename: true,
		unique_filename: false,
		overwrite: true,
		transformation: [{ width: 1000, height: 752, crop: 'scale' }],
	};

	if (!title || !content || !image) return NextResponse.json({ message: 'Please fill all fields' });

	try {
		console.log(image);
		const result = await cloudinary.uploader.upload(image, options);
		console.log(result);
	} catch (err) {
		console.log(err);
		return NextResponse.json({ message: 'Error', err });
	}

	/*const post = await prisma.post.create({
		data: {
			title,
			content,
			image: result.secure_url,
		},
	});
	return NextResponse.json({ message: 'Post created successfully', post });*/
}

export async function DELETE(req: Request) {
	const data = await req.json();
	console.log(data);
	const { id, image } = data;
	try {
		await cloudinary.uploader.destroy(transformCloudinaryUrl(image, 'posts'));
		const post = await prisma.post.delete({
			where: {
				id,
			},
		});
		return NextResponse.json({ message: 'Post deleted successfully', post });
	} catch (err) {
		console.log(err);
		return NextResponse.json({ message: 'Error', err });
	}
}
