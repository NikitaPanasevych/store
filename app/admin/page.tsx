import getShop from '@/lib/services/getShop';
import { Post } from '@/models/home.posts';
import styles from './styles.module.scss';
import { NestedTable } from './table';

const AdminPage = async () => {
	const { data } = await getShop();

	return (
		<main className={styles.admin}>
			<h1>Admin Page</h1>
			<NestedTable content={data.posts as Post[]} name="Posts" />
		</main>
	);
};

export default AdminPage;
