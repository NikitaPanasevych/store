import React from 'react';
import Search from '@/components/search';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

const ShopLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Search />
			<Header />
			<Toaster />
			{children}
			<Footer />
		</>
	);
};

export default ShopLayout;
