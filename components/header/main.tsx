'use client';

import styles from './styles.module.scss';
import { BsFillBagFill } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { AppContext } from '@/context/app.context';
import { useContext } from 'react';
import { Cart } from '../cart';

const Main = () => {
	const { miniCartOpen, setMiniCart } = useContext(AppContext);

	const clickHandler = () => {
		setMiniCart(!miniCartOpen);
	};

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
					<div onClick={clickHandler}>
						<BsFillBagFill />
					</div>
				</div>
			</div>
			{miniCartOpen && <Cart />}
		</>
	);
};

export default Main;
