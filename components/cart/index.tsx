import { CartProductProps } from '@/models/shop.product';
import { removeFromCart } from '@/redux/features/cartSlice';
import { RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.scss';

export const Cart = () => {
	const cart = useSelector((state: RootState) => state.cartReducer);
	const dispatch = useDispatch();

	return (
		<div className={styles.cart}>
			{cart.map((e: CartProductProps) => (
				<>
					<span>
						{e.name} {e.cartQuantity}
					</span>
					<button onClick={() => dispatch(removeFromCart(e))}>delete</button>
				</>
			))}
		</div>
	);
};
