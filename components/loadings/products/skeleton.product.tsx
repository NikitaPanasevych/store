import React from 'react';
import styles from './styles.module.scss';
import { FunctionComponent } from 'react';

const SkeltonProduct = () => {
	return <div className={styles.skeleton}></div>;
};

//HOC FUNCTION
const withGrid = (Component: FunctionComponent) => {
	return function skeletonGrid(): JSX.Element {
		const quantity = Array.from(Array(8).keys());

		return (
			<div className={styles.grid}>
				{quantity.map((e) => (
					<Component key={e} />
				))}
			</div>
		);
	};
};

export default withGrid(SkeltonProduct);
