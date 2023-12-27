import getShop from '@/lib/services/getShop';
import styles from './styles.module.scss';
import { NestedTable } from './table';

const AdminPage = async () => {
	const { data } = await getShop();

	return (
		<main className={styles.admin}>
			<h1>Admin Page</h1>
			<section className={styles.admin__main}>
				{Object.keys(data).map((key, index) => {
					return <NestedTable content={data[key]} name={key} key={index} />;
				})}
			</section>
		</main>
	);
};

export default AdminPage;
