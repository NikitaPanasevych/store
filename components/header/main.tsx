import styles from './styles.module.scss';
import AuthBlock from './auth';
import Search from './search';
import HeaderCart from './cart';

const Main = () => {
	return (
		<>
			<div className={styles.header}>
				<div className={styles.header__left}>
					<div>
						<a href="/">Home</a>
					</div>
					<div>
						<a href="/shop">Wines</a>
					</div>
					<div>About Us</div>
					<div>Contact</div>
				</div>
				<div className={styles.header__logo}>LOGO</div>
				<div className={styles.header__right}>
					<AuthBlock />
					<Search />
					<HeaderCart />
				</div>
			</div>
		</>
	);
};

export default Main;
