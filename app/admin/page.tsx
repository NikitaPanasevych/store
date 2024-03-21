import styles from './styles.module.scss';
import getCategory from '@/actions/getCategory';
import { NestedTable } from './table';

const AdminPage = async () => {
	const data = await getCategory();
	console.log(Object.keys(data));

	return (
		<main className={styles.admin}>
			<h1>Welcome to Admin Page</h1>
			<section className={styles.admin__main}>
				{Object.keys(data).map((key, index) => {
					{
						/*@ts-ignore*/
						return <NestedTable content={data[key]} name={key} key={index} />;
					}
				})}
			</section>
		</main>
	);
};

export default AdminPage;
