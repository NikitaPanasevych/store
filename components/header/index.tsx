'use client';

import { AppContext, AppContextProvider } from '@/context/app.context';
import React, { useContext } from 'react';
import { Categories } from './categories';
import Main from './main';

export const Header = () => {
	const { miniCartOpen } = useContext(AppContext);

	return (
		<AppContextProvider miniCartOpen={false}>
			<header>
				<Main />
				<Categories />
			</header>
		</AppContextProvider>
	);
};
