'use client';

import styles from './styles.module.scss';
import SkeletonProductPage from '@/components/loadings/product.page/skeleton.product';
import React from 'react';
import ProductPageMain from './main';

export default async function ProductPage({ params }: { params: { slug: string } }) {
	const { slug } = params;

	return (
		<div className={styles.productPage}>
			<React.Suspense fallback={<SkeletonProductPage />}>
				{/* @ts-ignore */}
				<ProductPageMain slug={slug} />
			</React.Suspense>
		</div>
	);
}
