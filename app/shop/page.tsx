import MyDrawer from '@/components/drawer';
import { Listbox } from '@/components/listbox';
import { PagerLinks } from '@/UI/pager-links';
import { Filters } from './filters';
import styles from './styles.module.scss';
import React from 'react';
import ProductsListing from './listing';
import withGrid from '@/components/loadings/products/skeleton.product';

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
				<React.Suspense fallback={withGrid()}>
					<ProductsListing />
				</React.Suspense>
			</div>
		</main>
	);
}
