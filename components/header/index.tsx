import React from 'react';
import { CategoriesComponent } from './categories';
import Main from './main';

export const Header = () => {
	return (
		<header>
			<Main />
			<CategoriesComponent />
		</header>
	);
};
