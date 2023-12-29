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
	grapeName?: string;
	countryName?: string;
	categoryName?: string;
}

export interface ProductsRequest {
	status: string;
	data: ProductProps[];
}

export interface CartProductProps extends ProductProps {
	cartQuantity: number;
}

export interface ProductRequest {
	status: string;
	data: ProductProps;
}
