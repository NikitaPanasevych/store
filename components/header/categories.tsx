import styles from './styles.module.scss';

import { Dropdown } from './dropdown';
import getCategory from '@/lib/services/getCategories';
import { Categories } from '@/models/shop.categories';

export const CategoriesComponent = async () => {
	const categories = await getCategory('all');

	let keys: string[] = Object.keys(categories.data);
	let values: string[][] = Object.values(categories.data);

	return (
		<div className={styles.category}>
			{keys.map((key, index) => (
				<Dropdown key={index} name={key} options={values[index]} />
			))}
			<div className={styles.category__element}>Full selection</div>
		</div>
	);
};
