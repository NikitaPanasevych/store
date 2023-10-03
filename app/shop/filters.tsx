import styles from './styles.module.scss';

export const Filters = () => {
	return (
		<section className={styles.filter}>
			<div className={styles.filter__name}>Category</div>
			<ul className={styles.filter__section}>
				<li className={styles.filter__section__element}>
					<input type="checkbox" name="category-1" id="category-1" />
					<label htmlFor="category-1">
						<span className={styles.filter__section__element__name}>Still Wines</span>
						<span className={styles.filter__section_element__count}>(516)</span>
					</label>
				</li>
				<li className={styles.filter__section__element}>
					<input type="checkbox" name="category-2" id="category-2" />
					<label htmlFor="category-2">
						<span className={styles.filter__section__element__name}>Sparkling Wines</span>
						<span className={styles.filter__section_element__count}>(341)</span>
					</label>
				</li>
				<li className={styles.filter__section__element}>
					<input type="checkbox" name="category-3" id="category-3" />
					<label htmlFor="category-3">
						<span className={styles.filter__section__element__name}>Sweet Wines</span>
						<span className={styles.filter__section_element__count}>(168)</span>
					</label>
				</li>
				<li className={styles.filter__section__element}>
					<input type="checkbox" name="category-4" id="category-4" />
					<label htmlFor="category-4">
						<span className={styles.filter__section__element__name}>Fortified Wines</span>
						<span className={styles.filter__section_element__count}>(214)</span>
					</label>
				</li>
			</ul>
		</section>
	);
};
