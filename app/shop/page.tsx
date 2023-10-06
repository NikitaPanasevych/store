import MyDrawer from '@/components/drawer';
import { Listbox } from '@/components/listbox';
import { getProducts } from '@/lib/functions';
import { ProductProps } from '@/models/shop.product';
import { PagerLinks } from '@/UI/pager-links';
import { Filters } from './filters';
import { Product } from './product';
import styles from './styles.module.scss';

export default async function Shop() {
	const products = await getProducts();

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
					{products?.data.map((product: ProductProps) => {
						return (
							<Product
								name={product.name}
								quantity={product.quantity}
								price={product.price}
								image={product.image}
								categories={product.categories}
							/>
						);
					})}
				</div>
			</div>
		</main>
	);
}
