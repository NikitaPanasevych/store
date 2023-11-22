import { Content } from '@/app/admin/table';
import { Post } from '@/models/home.posts';
import { Categories } from '@/models/shop.categories';
import { ProductProps } from '@/models/shop.product';

export function isPost(content: Content): content is Post {
	return 'title' in content;
}

export function isProductProps(content: Content): content is ProductProps {
	return 'price' in content;
}

export function isCategories(content: Content): content is Categories {
	return 'name' in content;
}
