import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';
import { ProductProps } from '@/models/shop.product';
import { transformCloudinaryUrl } from '@/lib/functions/transformCloudinaryURL';

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: Request) {
	const data: ProductProps = await req.json();
	const { name, description, year, price, image, alcohol, quantity, volume, categoryName, grapeName, countryName } = data;
	console.log(data);
	/*const options = {
		use_filename: true,
		unique_filename: false,
		overwrite: true,
		transformation: [{ width: 1000, height: 752, crop: 'scale' }],
	};

	try {
		console.log(image);
		const result = await cloudinary.uploader.upload(image, options);
		console.log(result);
	} catch (err) {
		console.log(err);
		return NextResponse.json({ message: 'Error', err });
	}

	const post = await prisma.post.create({
			data: {
				title,
				content,
				image: result.secure_url,
			},
		});
		return NextResponse.json({ message: 'Post created successfully', post });
	}*/
}

export async function DELETE(req: Request) {
	const data = await req.json();
	const { id, image } = data;
	try {
		await cloudinary.uploader.destroy(transformCloudinaryUrl(image, 'wine'));
		const deletedProduct = await prisma.product.delete({
			where: {
				id,
			},
		});
		return NextResponse.json({ message: 'Product deleted successfully', deletedProduct });
	} catch (err) {
		console.log(err);
		return NextResponse.json({ message: 'Error', err });
	}
}

export async function PUT(req: Request) {
	const data = await req.json();
	const { id, name, description, year, price, image, alcohol, quantity, volume, category, grape, country } = data;
	try {
		await prisma.product.update({
			where: {
				id,
			},
			data: {
				id,
				name,
				description,
				year,
				price,
				image,
				alcohol,
				quantity,
				volume,
				category,
				grape,
				country,
			},
		});
		return NextResponse.json({ message: 'Product updated successfully' });
	} catch (err) {
		console.log(err);
		return NextResponse.json({ message: 'Error', err });
	}
}
