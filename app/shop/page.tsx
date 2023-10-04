import MyDrawer from '@/components/drawer';
import { Listbox } from '@/components/listbox';
import { PagerLinks } from '@/UI/pager-links';
import { Filters } from './filters';
import { Product } from './product';
import styles from './styles.module.scss';

export default function Shop() {
	return (
		<main className={styles.shop}>
			<div className={styles.shop__main}>
				<div className={styles.shop__main__header}>
					<h1>Browse Wines</h1>
					<hr />
				</div>
				<div className={styles.shop__main__sort}>
					<div className={styles.shop__main__sort__section}>
						{<Listbox name="Default Sort" options={['Default Sort', 'Price', 'Name', 'Rating']} />}
						<MyDrawer anchor="left" buttonChildren={<div className={styles.button}>Filters</div>}>
							<Filters />
						</MyDrawer>
					</div>
					<div className={styles.shop__main__sort__pagination}>
						{([8, 16, 32] as const).map((item, index) => {
							return <PagerLinks key={index} quantity={item} />;
						})}
					</div>
				</div>
				<div className={styles.shop__main__listing}>
					<Product
						name="Chambertin Clos de Beze Armand Rousseau 2008"
						quantity={11}
						price={100}
						image="https://via.placeholder.com/300x300"
						categories={['Red']}
					/>
				</div>
			</div>
		</main>
	);
}
