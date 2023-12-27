import { FaCalendarAlt } from 'react-icons/fa';
import { FaHandHoldingWater } from 'react-icons/fa';
import { FaDroplet } from 'react-icons/fa6';
import { FaGlobeAfrica } from 'react-icons/fa';
import { LuGrape } from 'react-icons/lu';
import { FaWineBottle } from 'react-icons/fa';
import { FaPercentage } from 'react-icons/fa';
import getProduct from '@/lib/services/getProduct';
import styles from './styles.module.scss';

interface ProductPageMainProps {
	slug: string;
}

export default async function ProductPageMain(props: ProductPageMainProps) {
	const { slug } = props;

	const product = await getProduct(slug);

	const { name, description, price, image, year, alcohol, quantity, volume, categoryName, countryName, grapeName } =
		product.data;

	return (
		<>
			<div className={styles.productPage__image}>
				<img src={image} alt={image} />
			</div>
			<div className={styles.productPage__info}>
				<h3>{name}</h3>
				<div className={styles.productPage__info__price}>
					<span>£{price}</span>
					<span>
						<FaWineBottle />
						{volume} ml
					</span>
				</div>
				<div className={styles.productPage__info__block}>
					<span>
						<FaCalendarAlt /> {year}
					</span>
					<span>
						<FaHandHoldingWater />
						{quantity}
					</span>
					<span>
						<FaDroplet />
						{categoryName}
					</span>
					<span>
						<FaGlobeAfrica />
						{countryName}
					</span>
					<span>
						<LuGrape />
						{grapeName}
					</span>
					<span>
						<FaPercentage />
						{alcohol}
					</span>
				</div>
				<div className={styles.productPage__info__descr}>
					<p>{description}</p>
				</div>
			</div>
		</>
	);
}
