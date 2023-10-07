export class ProductProps {
	name: string;
	quantity: number;
	price: number;
	image: string;
	categories: string[];
	alcohol: number;
	volume: number;

	constructor(
		name: string,
		alcohol: number,
		volume: number,
		quantity: number,
		price: number,
		image: string,
		categories: string[]
	) {
		this.name = name;
		this.quantity = quantity;
		this.price = price;
		this.image = image;
		this.categories = categories;
		this.alcohol = alcohol;
		this.volume = volume;
	}
}

export interface ProductRequest {
	status: string;
	data: ProductProps[];
}
