import MyDrawer from '@/components/drawer';
import { Listbox } from '@/components/listbox';
import { PagerLinks } from '@/UI/pager-links';
import { Filters } from './filters';
import styles from './styles.module.scss';

export default function Shop() {
	const data = [8, 16, 32];

	return (
		<main className={styles.shop}>
			<div className={styles.shop__main}>
				<div className={styles.shop__main__header}>
					<h1>Browse Wines</h1>
					<hr />
				</div>
				<div className={styles.shop__main__sort}>
					<div className={styles.shop__main__sort__dropdown}>
						{<Listbox name="Default Sort" options={['Default Sort', 'Price', 'Name', 'Rating']} />}
						<MyDrawer anchor="left" buttonChildren={<div>Categories</div>}>
							<Filters />
						</MyDrawer>
					</div>
					<div className={styles.shop__main__sort__pagination}>
						{data.map((item, index) => {
							return <PagerLinks key={index} quantity={item} />;
						})}
					</div>
				</div>
				<div className={styles.shop__main__listing}>{/* product component */}</div>
			</div>
		</main>
	);
}
