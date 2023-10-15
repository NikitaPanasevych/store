import getShop from '@/lib/services/getShop';
import { Post } from '@/models/home.posts';
import styles from './styles.module.scss';

const AdminPage = async () => {
	const { data } = await getShop();
	console.log(data);

	return (
		<main className={styles.admin}>
			<h1>Admin Page</h1>
			<ul></ul>
		</main>
	);
};

export default AdminPage;
