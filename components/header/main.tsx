import styles from './styles.module.scss';
import { BsFillBagFill } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import MyDrawer from '../drawer';
import { Cart } from '../cart';

const Main = () => {
	return (
		<>
			<div className={styles.header}>
				<div className={styles.header__left}>
					<div>Home</div>
					<div>Wines</div>
					<div>About Us</div>
					<div>Contact</div>
				</div>
				<div className={styles.header__logo}>LOGO</div>
				<div className={styles.header__right}>
					<div>
						<AiOutlineSearch />
					</div>
					<div>
						<MyDrawer anchor="right" buttonChildren={<BsFillBagFill />}>
							<Cart />
						</MyDrawer>
					</div>
				</div>
			</div>
		</>
	);
};

export default Main;
