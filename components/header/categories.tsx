import styles from './styles.module.scss';

import { Dropdown } from './dropdown';
import getCategory from '@/lib/services/getCategories';
import { Categories } from '@/models/shop.categories';

export const Categories = async () => {
	const grapes = await getCategory('grapes');
	const categories = await getCategory('categories');
	const countries = await getCategory('countries');

	return (
		<div className={styles.category}>
			{categories.map((category: Categories, index: number) => (
				<Dropdown key={index} name={category.name} options={category.name} />
			))}
			<div className={styles.category__element}>Full selection</div>
		</div>
	);
};
