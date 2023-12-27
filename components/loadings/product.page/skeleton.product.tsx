import React from 'react';
import styles from '../../../app/shop/[slug]/styles.module.scss';

const SkeletonProductPage = () => {
	return (
		<>
			<div className={styles.productPage__image} />
			<div className={styles.productPage__info}>
				<h3>
					<div className={styles.skeleton}></div>
				</h3>
				<div className={styles.productPage__info__price}>
					<div className={styles.skeleton}></div>
					<div className={styles.skeleton}></div>
				</div>
				<div className={styles.productPage__info__block}>
					<span>
						<div className={styles.skeleton} />
					</span>
					<span>
						<div className={styles.skeleton} />
					</span>
					<span>
						<div className={styles.skeleton} />
					</span>
					<span>
						<div className={styles.skeleton} />
					</span>
					<span>
						<div className={styles.skeleton} />
					</span>
					<span>
						<div className={styles.skeleton} />
					</span>
				</div>
				<div className={styles.productPage__info__descr}>
					<div className={styles.skeleton} />
				</div>
			</div>
		</>
	);
};

export default SkeletonProductPage;
