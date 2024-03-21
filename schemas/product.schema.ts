import { z } from 'zod';

const productSchema = z.object({
	name: z.string(),
	price: z.number(),
	description: z.string(),
	image: z.string(),
	year: z.number().int().max(new Date().getFullYear()),
	volume: z.number(),
	alcohol: z.number(),
	quantity: z.number().int(),
	categoryName: z.string().min(1).max(255),
	countryName: z.string().min(1).max(255),
	grapeName: z.string().min(1).max(255),
});

export default productSchema;
