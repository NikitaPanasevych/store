import styles from './styles.module.scss';

//icons
import { FaTruck } from 'react-icons/fa';
import { FaGift } from 'react-icons/fa6';
import Button from '@/UI/button';
import SkeletonProductPage from '@/components/loadings/product.page/skeleton.product';
import React from 'react';
import ProductPageMain from './main';

export default async function ProductPage({ params }: { params: { slug: string } }) {
	const { slug } = params;

	return (
		<div className={styles.productPage}>
			<React.Suspense fallback={<SkeletonProductPage />}>
				<ProductPageMain slug={slug} />
			</React.Suspense>
			<div className={styles.productPage__buttonBlock}>
				<div className={styles.productPage__buttonBlock__upper}>
					<input type="number" placeholder="1" />
					<Button style="default">BUY NOW</Button>
				</div>
				<div className={styles.productPage__buttonBlock__lower}>
					<div>
						<FaTruck />
						<p>Free delivery on orders over £200 or 6 bottles</p>
					</div>
					<div>
						<FaGift />
						<p>Gift wrapping available at checkout</p>
					</div>
				</div>
			</div>
		</div>
	);
}
