import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { auth } from '@/auth';

export default async function getCart() {
	const session = await auth();
	console.log(session);
	if (session) {
		return session.user.cart;
	}
	const cart = useSelector((state: RootState) => state.cartReducer);
	return cart;
}
