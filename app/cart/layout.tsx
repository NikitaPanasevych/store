import React from 'react';
import Search from '@/components/search';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const CartLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Search />
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default CartLayout;
