import getShop from '@/lib/services/getShop';
import styles from './styles.module.scss';

const AdminPage = async () => {
	const { data } = await getShop();
	console.log(data);

	return (
		<main className={styles.admin}>
			<h1>Welcome to Admin Page</h1>
			<section className={styles.admin__main}>
				{/*Object.keys(data).map((key, index) => {
					return(
						
					);
				})*/}
			</section>
		</main>
	);
};

export default AdminPage;
