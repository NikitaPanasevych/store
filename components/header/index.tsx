'use client';

import React, { useContext } from 'react';
import { Categories } from './categories';
import Main from './main';

export const Header = () => {
	return (
		<header>
			<Main />
			<Categories />
		</header>
	);
};
