import { Post } from './home.posts';
import { Country } from './shop.countries';
import { Grape } from './shop.grapes';
import { ProductProps } from './shop.product';
import { Types } from './shop.types';

export interface ShopRequest {
	success: string;
	data: {
		posts: Post[];
		products: ProductProps[];
		types: Types[];
		grapes: Grape[];
		countries: Country[];
	};
}
