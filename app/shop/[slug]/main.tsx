import styles from './styles.module.scss';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/features/cartSlice';
import { ProductProps } from '@/models/shop.product';
import { CnButton } from '@/components/ui/button';
import useFetch from '@/lib/hooks/use-fetch';
import { Watch } from 'react-loader-spinner';

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
				<Watch
					visible={true}
					height="80"
					width="80"
					color="#000000"
					ariaLabel="oval-loading"
					wrapperStyle={{}}
					wrapperClass=""
				/>
			</div>
		);
	}

	if (error || !data) {
		return <div>Error: Failed to fetch data</div>; // Render error state if fetching failed
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
	};

	const addToCartHandler = (product: ProductProps) => {
		dispatch(addToCart(product));
		toast({
			title: 'Product added to cart',
		});
	};

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
						<CnButton size="lg" onClick={() => addToCartHandler(cartProduct)}>
							Add to Cart
						</CnButton>
					</div>
					<div className={styles.Product__info__attributes}>
						<span>
							type:{' '}
							<p>
								<strong>{categoryName}</strong>
							</p>
						</span>
						<span>
							grape:{' '}
							<p>
								<strong>{grapeName}</strong>
							</p>
						</span>
						<span>
							year:{' '}
							<p>
								<strong>{year}</strong>
							</p>
						</span>
						<span>
							alcohol:{' '}
							<p>
								<strong>{alcohol} %</strong>
							</p>
						</span>
						<span>
							quantity:{' '}
							<p>
								<strong>{quantity}</strong>
							</p>
						</span>
						<span>
							volume:{' '}
							<p>
								<strong>{volume} ml</strong>
							</p>
						</span>
					</div>
					<div className={styles.Product__info__description}>
						<p>{description}</p>
					</div>
				</div>
			</div>
		</>
	);
}
