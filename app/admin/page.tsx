import getShop from '@/lib/services/getShop';
import { Post } from '@/models/home.posts';
import { ProductProps } from '@/models/shop.product';
import { Types } from '@/models/shop.types';
import styles from './styles.module.scss';
import { NestedTable } from './table';

const AdminPage = async () => {
	const { data } = await getShop();

	return (
		<main className={styles.admin}>
			<h1>Admin Page</h1>
			{Object.keys(data).map((key, index) => {
				// @ts-ignore
				return <NestedTable content={data[key]} name={key} key={index} />;
			})}
		</main>
	);
};

export default AdminPage;
