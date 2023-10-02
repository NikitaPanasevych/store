import Link from 'next/link';
import styles from './styles.module.scss';

export interface PagerLinksProps {
	quantity: number;
}

export const PagerLinks = (props: PagerLinksProps) => {
	const { quantity } = props;

	return (
		<div className={styles.pager}>
			<Link href={`?items_per_page=${quantity}`}>{quantity}</Link>
		</div>
	);
};
