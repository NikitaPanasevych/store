import React from 'react';
import Search from '@/components/search';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

const CartLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Search />
			<Header />
			{children}
			<Toaster />
			<Footer />
		</>
	);
};

export default CartLayout;
