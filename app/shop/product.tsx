import { ProductProps } from '@/models/shop.product';
import Link from 'next/link';
import styles from './styles.module.scss';

export const Product = (props: ProductProps) => {
	const { name, quantity, price, image, volume } = props;

	return (
		<Link href={'/shop/' + name.replace(/ /g, '-')}>
			<div className={styles.product}>
				<div className={styles.product__image}>
					<img src={image} alt="Product" />
				</div>
				<div className={styles.product__description}>
					<div className={styles.product__description__name}>{name}</div>
					<div className={styles.product__description__quantity}>({quantity}) Available</div>
					<div className={styles.product__description__volume}>{volume} ml</div>
				</div>
				<div className={styles.product__price}>
					<div className={styles.product__price__value}>$ {price}</div>
					<button className={styles.product__price__addbtn}>Add to Cart</button>
				</div>
			</div>
		</Link>
	);
};
