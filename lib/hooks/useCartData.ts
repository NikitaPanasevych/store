import { useEffect, useState } from 'react';
import { getSession } from 'next-auth/react';
import getCartAction from '@/actions/getCart'; // Import your getCartAction here
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store'; // Import your RootState type here
import { CartProductProps } from '@/models/shop.product';

const useCartData = () => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [cart, setCart] = useState<CartProductProps[]>([]); // Set initial state to an empty array

	useEffect(() => {
		const fetchData = async () => {
			try {
				const session = await getSession();
				let cartData = [];
				if (session) {
					// If session is available, fetch cart data using user id
					cartData = await getCartAction(session.user.id);
				} else {
					// If no session, fallback to local storage or Redux state
					cartData = useSelector((state: RootState) => state.cartReducer);
				}
				setCart(cartData);
				setLoading(false); // Set loading to false after fetching data
			} catch (error) {
				console.error('Error fetching session:', error);
				setError(error); // Set error state if an error occurs
				setLoading(false); // Set loading to false in case of error
			}
		};

		fetchData();
	}, []);

	return { cart, loading, error }; // Return cart data along with loading and error states
};

export default useCartData;
