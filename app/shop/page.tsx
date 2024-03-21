import MyDrawer from '@/components/drawer';
import { MyListbox } from '@/components/listbox';
import { PagerLinks } from '@/UI/pager-links';
import { Filters } from './filters';
import styles from './styles.module.scss';
import React from 'react';
import ProductsListing from './listing';
import withGrid from '@/components/loadings/products/skeleton.product';
import getProducts from '@/actions/getProducts';

export default async function Shop() {
	const products = await getProducts();
	console.log(products);

	return (
		<section className={styles.shop}>
			<div className={styles.shop__main}>
				<div className={styles.shop__main__header}>
					<h1>Browse Wines</h1>
					<hr />
				</div>
				<div className={styles.shop__main__sort}>
					<div className={styles.shop__main__sort__section}>
						{<MyListbox name="Default Sort" options={['Default Sort', 'Price', 'Name', 'Rating']} />}
						<MyDrawer
							anchor="left"
							buttonChildren={
								<div className="relative w-full rounded-lg text-[1.4rem] bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 cursor-pointer">
									Filters
								</div>
							}
						>
							<Filters />
						</MyDrawer>
					</div>
					<div className={styles.shop__main__sort__pagination}>
						{([8, 16, 32] as const).map((item, index) => {
							return <PagerLinks key={index} quantity={item} />;
						})}
					</div>
				</div>
				{
					<React.Suspense fallback={withGrid()}>
						<ProductsListing products={products} />
					</React.Suspense>
				}
			</div>
		</section>
	);
}
