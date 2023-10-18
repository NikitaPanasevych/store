import { Post } from './home.posts';
import { Country } from './shop.countries';
import { Grape } from './shop.grapes';
import { ProductProps } from './shop.product';
import { Categories } from './shop.categories';

export interface ShopRequest {
	success: string;
	data: {
		posts: Post[];
		products: ProductProps[];
		types: Categories[];
		grapes: Grape[];
		countries: Country[];
	};
}
