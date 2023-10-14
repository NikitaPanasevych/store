export interface ProductProps {
	id?: string;
	name: string;
	quantity: number;
	price: number;
	image: string;
	categories: string[];
	alcohol?: number;
	volume?: number;
}

export interface ProductsRequest {
	status: string;
	data: ProductProps[];
}

export interface ProductRequest {
	status: string;
	data: ProductProps;
}
