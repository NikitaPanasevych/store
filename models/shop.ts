import { Post } from './home.posts';

import { ProductProps } from './shop.product';
import { Categories } from './shop.categories';

export interface ShopRequest {
	success: string;
	data: {
		posts: Post[];
		products: ProductProps[];
		category: Categories[];
		grapes: Categories[];
		countries: Categories[];
	};
}
