'use client';

import styles from './styles.module.scss';
import { categories } from '@/data/categories';
import { Dropdown } from './dropdown';

export const Categories = () => {
	return (
		<div className={styles.category}>
			{categories.map((category, index) => (
				<Dropdown key={index} name={category.name} options={category.options} />
			))}
			<div className={styles.category__element}>Full selection</div>
		</div>
	);
};
