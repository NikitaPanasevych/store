import React from 'react';
import styles from './styles.module.scss';
import { Skeleton } from '@/components/ui/skeleton';

const SkeletonProductPage = () => {
	return (
		<>
			<div className={styles.Product}>
				<div className={styles.Product__image}>
					<Skeleton className="h-full w-full" />
				</div>
				<div className={styles.Product__info}>
					<div className={styles.Product__info__title}>
						<Skeleton className="h-full w-full" />
						<p>
							<Skeleton className="h-full w-full" />
						</p>
						<p>
							<Skeleton className="h-full w-full" />
						</p>
					</div>
					<div className={styles.Product__info__checkout}>
						<div className={styles.Product__info__checkout__price}>
							<p>Price for 1 bottle:</p>
							<p>
								<Skeleton className="h-full w-full" />
							</p>
						</div>
						<Skeleton className="h-full w-full" />
					</div>
					<div className={styles.Product__info__attributes}>
						<span>
							<Skeleton className="h-full w-full" />
						</span>
						<span>
							<Skeleton className="h-full w-full" />
						</span>
						<span>
							<Skeleton className="h-full w-full" />
						</span>
						<span>
							<Skeleton className="h-full w-full" />
						</span>
						<span>
							<Skeleton className="h-full w-full" />
						</span>
						<span>
							<Skeleton className="h-full w-full" />
						</span>
					</div>
					<div className={styles.Product__info__description}>
						<Skeleton className="h-full w-full" />
					</div>
				</div>
			</div>
		</>
	);
};

export default SkeletonProductPage;
