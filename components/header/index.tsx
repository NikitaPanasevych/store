import React from 'react';
import { Categories } from './categories';
import Main from './main';
import styles from './styles.module.scss';

export const Header = () => {
	return (
		<header>
			<Main />
			<Categories />
		</header>
	);
};
