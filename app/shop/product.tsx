import { ProductProps } from '@/models/shop.product';
import { addToCart } from '@/redux/features/cartSlice';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import styles from './styles.module.scss';

export interface ProductCardProps {
	product: ProductProps;
}

export const Product = (props: ProductCardProps) => {
	const { name, quantity, price, image, volume } = props.product;

	const dispatch = useDispatch();

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
					<button
						className={styles.product__price__addbtn}
						onClick={(event) => {
							event.preventDefault();
							dispatch(addToCart(props.product));
						}}
					>
						Add to Cart
					</button>
				</div>
			</div>
		</Link>
	);
};
