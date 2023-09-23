import '../styles/global.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '../components/header';
import { Footer } from '@/components/footer';
import { AppContextProvider } from '@/context/app.context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<AppContextProvider miniCartOpen={false}>
				<body className={inter.className}>
					<Header />
					{children}
					<Footer />
				</body>
			</AppContextProvider>
		</html>
	);
}
