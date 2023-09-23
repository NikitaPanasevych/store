'use client';

import { createContext, ReactNode, useState } from 'react';

export interface IAppContext {
	miniCartOpen: boolean;
	setMiniCart: (newState: boolean) => void;
}

//@ts-ignore
export const AppContext = createContext<IAppContext>({ miniCartOpen: false });

export const AppContextProvider = ({
	children,
	miniCartOpen,
}: {
	children: ReactNode;
	miniCartOpen: boolean;
}): JSX.Element => {
	const [miniCartState, setMiniCartState] = useState<boolean>(miniCartOpen);

	const setMiniCart = (newState: boolean) => {
		setMiniCartState(newState);
	};

	const contextValue: IAppContext = {
		miniCartOpen: miniCartState,
		setMiniCart: setMiniCart,
	};

	return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
