import styles from './styles.module.scss';

import MyDropdown from './newDropdown';
import getCategory from '@/actions/getCategory';

export const CategoriesComponent = async () => {
	const categories = await getCategory('all');

	const keys: string[] = Object.keys(categories);
	const values = Object.values(categories);

	return (
		<div className={styles.category}>
			{keys.map((key, index) => (
				<MyDropdown key={index} name={key} options={values[index]} />
			))}
			<div className={styles.category__element}>Full selection</div>
		</div>
	);
};
