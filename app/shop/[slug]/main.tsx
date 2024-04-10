'use client';

import styles from './styles.module.scss';
import { ProductProps } from '@/models/shop.product';
import { CnButton } from '@/components/ui/button';
import useFetch from '@/lib/hooks/use-fetch';
import { FallingLines } from 'react-loader-spinner';
import Fy from './fy';
import addToCartServerAction from '@/actions/addToCart';
import { useToast } from '@/components/ui/use-toast';

interface ProductPageMainProps {
	slug: string;
}

export default function ProductPageMain(props: ProductPageMainProps) {
	const { slug } = props;
	const { data, loading, error } = useFetch(slug);
	const { toast } = useToast();

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

	return (
		<>
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
						<CnButton
							size="lg"
							className="rounded"
							onClick={() => {
								addToCartServerAction(data);
								toast({ title: 'Item added to cart' });
							}}
						>
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
