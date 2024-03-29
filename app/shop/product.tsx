'use client';

import { ProductProps } from '@/models/shop.product';
import { addToCart } from '@/redux/features/cartSlice';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import styles from './product.module.scss';
import { CnButton } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export interface ProductCardProps {
	product: ProductProps;
}

export const Product = (props: ProductCardProps) => {
	const { name, quantity, price, image, volume, categoryName, countryName, grapeName } = props.product;

	const dispatch = useDispatch();

	return (
		<Link href={'/shop/' + name.replace(/ /g, '-')}>
			<div className={styles.product}>
				<div className={styles.product__image}>
					<div className={styles.product__image__categories}>
						<Badge>{categoryName}</Badge>
						<Badge>{countryName}</Badge>
						<Badge>{grapeName}</Badge>
					</div>
					<img src={image} alt="Product" />
				</div>
				<div className={styles.product__description}>
					<div className={styles.product__description__name}>
						{name.length > 25 ? name.substring(0, 25) + '...' : name}
					</div>
					<div className={styles.product__description__quantity}>({quantity}) Available</div>
					<div className={styles.product__description__volume}>{volume} ml</div>
				</div>
				<div className={styles.product__price}>
					<div className={styles.product__price__value}>$ {price}</div>
					<CnButton
						className="rounded bg-dark hover:text-active text-white w-full mt-1"
						onClick={(event) => {
							event.preventDefault();
							dispatch(addToCart(props.product));
						}}
					>
						Add to Cart
					</CnButton>
				</div>
			</div>
		</Link>
	);
};
