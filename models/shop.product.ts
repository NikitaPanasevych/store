export interface ProductProps {
	id?: string;
	name: string;
	quantity: number;
	description: string;
	year: number;
	price: number;
	image: string;
	alcohol?: number;
	volume?: number;
	grape?: string;
	country?: string;
	category?: string;
}

export interface ProductsRequest {
	status: string;
	data: ProductProps[];
}

export interface ProductRequest {
	status: string;
	data: ProductProps;
}
