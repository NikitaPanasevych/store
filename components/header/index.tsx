import React from 'react';
import { BsFillBagFill } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import styles from './styles.module.scss';

export const Header = () => {
	return (
		<header className={styles.header}>
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
					<BsFillBagFill />
				</div>
			</div>
		</header>
	);
};
