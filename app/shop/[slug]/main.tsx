'use client';

import styles from './styles.module.scss';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/features/cartSlice';
import { ProductProps } from '@/models/shop.product';
import { CnButton } from '@/components/ui/button';
import useFetch from '@/lib/hooks/use-fetch';
import { FallingLines } from 'react-loader-spinner';
import Fy from './fy';

interface ProductPageMainProps {
	slug: string;
	toast: (options: { title: string }) => void;
}

export default function ProductPageMain(props: ProductPageMainProps) {
	const { slug, toast } = props;
	const dispatch = useDispatch();
	const { data, loading, error } = useFetch(slug);

	if (loading) {
		return (
			<div className="flex w-full h-full justify-center align-middle">
				<FallingLines visible={true} height="100" width="100" color="#000000" />
			</div>
		);
	}

	if (error || !data) {
		return <div>Error: {error}</div>;
	}

	const { name, description, price, image, year, alcohol, quantity, volume, categoryName, countryName, grapeName } =
		data;

	const cartProduct: ProductProps = {
		name,
		quantity,
		price,
		image,
		volume,
		year,
		description,
		alcohol,
		categoryName,
		countryName,
		grapeName,
	};

	const addToCartHandler = (product: ProductProps) => {
		dispatch(addToCart(product));
		toast({
			title: 'Product added to cart',
		});
	};

	return (
		<>
			{}
			<div className={styles.Product}>
				<div className={styles.Product__image}>
					<img src={image} alt={name} />
				</div>
				<div className={styles.Product__info}>
					<div className={styles.Product__info__title}>
						<h1>{name}</h1>
						<p>
							<strong>Origin:</strong> {countryName}{' '}
						</p>
						<p>
							<strong>Size:</strong> {volume} ml
						</p>
					</div>
					<div className={styles.Product__info__checkout}>
						<div className={styles.Product__info__checkout__price}>
							<p>Price for 1 bottle:</p>
							<p>
								<strong>{price} $</strong>
							</p>
						</div>
						<CnButton size="lg" className="rounded" onClick={() => addToCartHandler(cartProduct)}>
							Add to Cart
						</CnButton>
					</div>
					<div className={styles.Product__info__attributes}>
						<span>
							Type:{' '}
							<p>
								<strong>{categoryName}</strong>
							</p>
						</span>
						<span>
							Grape:{' '}
							<p>
								<strong>{grapeName}</strong>
							</p>
						</span>
						<span>
							Year:{' '}
							<p>
								<strong>{year}</strong>
							</p>
						</span>
						<span>
							Alcohol:{' '}
							<p>
								<strong>{alcohol} %</strong>
							</p>
						</span>
						<span>
							Quantity:{' '}
							<p>
								<strong>{quantity}</strong>
							</p>
						</span>
						<span>
							Volume:{' '}
							<p>
								<strong>{volume} ml</strong>
							</p>
						</span>
					</div>
					<div className={styles.Product__info__description}>
						<p>{description}</p>
					</div>
				</div>
				<Fy />
			</div>
		</>
	);
}
