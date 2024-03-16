'use client';

import styles from './styles.module.scss';
import { BsFillBagFill } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import MyDrawer from '../drawer';
import { toggleSearch } from '@/redux/features/search.slice';
import { useDispatch, useSelector } from 'react-redux';
import { Cart } from '../cart';
import { RootState } from '@/redux/store';

const Main = () => {
	const dispatch = useDispatch();
	const cart = useSelector((state: RootState) => state.cartReducer);

	return (
		<>
			<div className={styles.header}>
				<div className={styles.header__left}>
					<div>
						<a href="/">Home</a>
					</div>
					<div>
						<a href="/shop">Wines</a>
					</div>
					<div>About Us</div>
					<div>Contact</div>
				</div>
				<div className={styles.header__logo}>LOGO</div>
				<div className={styles.header__right}>
					<div onClick={() => dispatch(toggleSearch())}>
						<AiOutlineSearch />
					</div>
					<div>
						<MyDrawer anchor="right" buttonChildren={<BsFillBagFill />}>
							<Cart />
						</MyDrawer>
					</div>
					<span className={styles.header__right__qty}>
						{cart.reduce((acc, item) => {
							return acc + item.cartQuantity;
						}, 0)}
					</span>
				</div>
			</div>
		</>
	);
};

export default Main;
