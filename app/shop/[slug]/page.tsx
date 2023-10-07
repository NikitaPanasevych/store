import styles from './styles.module.scss';

const ProductPage = ({ params }: { params: { slug: string } }) => {
	return <div className={styles.productPage}>page for {params.slug}</div>;
};

export default ProductPage;
