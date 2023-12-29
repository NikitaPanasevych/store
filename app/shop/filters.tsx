import styles from './styles.module.scss';

export const Filters = () => {
	const data = [
		{
			title: 'Still Wines',
		},
		{
			title: 'Sparkling Wines',
		},
		{
			title: 'Sweet Wines',
		},
		{
			title: 'Fortified Wines',
		},
	];

	return (
		<>
			<nav className={styles.aside}>
				<ul className={styles.aside_list}>
					{data.map((e, index) => (
						<li key={index}>
							<a href="/">{e.title}</a>
						</li>
					))}
				</ul>
			</nav>
		</>
	);
};
