'use client';

import styles from './styles.module.scss';
import SkeletonProductPage from '@/components/loadings/product.page/skeleton.product';
import React from 'react';
import ProductPageMain from './main';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';

export default function ProductPage({ params }: { params: { slug: string } }) {
	const { slug } = params;
	const { toast } = useToast();

	return (
		<div className={styles.productPage}>
			<React.Suspense fallback={<SkeletonProductPage />}>
				{/* @ts-ignore */}
				<ProductPageMain slug={slug} toast={toast} />
			</React.Suspense>
			<Toaster />
		</div>
	);
}
