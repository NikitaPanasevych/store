import getProduct from '@/lib/services/getProduct';
import styles from './styles.module.scss';

export default async function ProductPage({ params }: { params: { slug: string } }) {
	const { slug } = params;

	const product = await getProduct(slug);

	const { name, description, price, images, year, alcohol, quantity, volume } = product;

	return <div className={styles.productPage}></div>;
}
