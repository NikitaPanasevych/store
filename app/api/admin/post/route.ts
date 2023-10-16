import prisma from '@/lib/prisma';
import { Post } from '@/models/home.posts';
import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: Request) {
	const data: Post = await req.json();
	const { title, content, image } = data;

	if (!title || !content || !image) return NextResponse.json({ message: 'Please fill all fields' });

	try {
		const options = {
			use_filename: true,
			unique_filename: false,
			overwrite: true,
			transformation: [{ width: 1000, height: 752, crop: 'scale' }],
		};
		console.log(image, options);
		try {
			const result = await cloudinary.uploader.upload(image, options);
			console.log(result);
		} catch (err) {
			console.log(err);
		}

		/*const post = await prisma.post.create({
			data: {
				title,
				content,
				image: result.secure_url,
			},
		});
		return NextResponse.json({ message: 'Post created successfully', post });
	}*/
	} catch (err) {
		return NextResponse.json({ message: 'Error', err });
	}
}
