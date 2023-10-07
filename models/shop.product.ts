export class ProductProps {
	name: string;
	quantity: number;
	price: number;
	image: string;
	categories: string[];
	link: string;

	constructor(name: string, quantity: number, price: number, image: string, categories: string[]) {
		this.name = name;
		this.quantity = quantity;
		this.price = price;
		this.image = image;
		this.categories = categories;
		this.link = this.generateLink();
	}

	public generateLink() {
		return (this.link = this.name.replace(/ /g, '-'));
	}
}

export interface ProductRequest {
	status: string;
	data: ProductProps[];
}
