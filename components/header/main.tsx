'use client';

import styles from './styles.module.scss';
import { BsFillBagFill } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import MyDrawer from '../drawer';
import { Cart } from '../cart';
import { toggleSearch } from '@/redux/features/search.slice';
import { RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';

const Main = () => {
	const isOpen = useSelector((state: RootState) => state.searchReducer.searchOpen);
	const dispatch = useDispatch();

	return (
		<>
			<div className={styles.header}>
				<div className={styles.header__left}>
					<div>Home</div>
					<div>Wines</div>
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
				</div>
			</div>
		</>
	);
};

export default Main;
