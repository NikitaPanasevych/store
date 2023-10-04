export interface ProductProps {
	name: string;
	quantity: number;
	price: number;
	image: string;
	categories: string[];
}

export interface ProductRequest {
	status: string;
	data: ProductProps[];
}
