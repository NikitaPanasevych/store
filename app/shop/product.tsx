import { ProductProps } from '@/models/shop.product';
import Image from 'next/image';
import styles from './styles.module.scss';

export const Product = (props: ProductProps) => {
	const { name, quantity, price, image } = props;

	return (
		<div className={styles.product}>
			<div className={styles.product__image}>
				<img src={image} alt="Product" />
			</div>
			<div className={styles.product__description}>
				<div className={styles.product__description__name}>{name}</div>
				<div className={styles.product__description__quantity}>({quantity}) Available</div>
			</div>
			<div className={styles.product__price}>
				<div className={styles.product__price__value}>$ {price}</div>
				<button className={styles.product__price__addbtn}>Add to Cart</button>
			</div>
		</div>
	);
};
