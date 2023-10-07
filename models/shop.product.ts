export class ProductProps {
	name: string;
	quantity: number;
	price: number;
	image: string;
	categories: string[];
	alcohol: number;
	volume: number;
	link: string;

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
		this.link = this.generateLink();
		this.alcohol = alcohol;
		this.volume = volume;
	}

	public generateLink() {
		return (this.link = this.name.replace(/ /g, '-'));
	}
}

export interface ProductRequest {
	status: string;
	data: ProductProps[];
}
