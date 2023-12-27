'use client';

import styles from './styles.module.scss';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Modal } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { toggleSearch } from '@/redux/features/search.slice';
import React, { useState } from 'react';
import { getProducts } from '@/lib/services';
import { SearchItemList } from './search';

export default function Search() {
	const isOpen = useSelector((state: RootState) => state.searchReducer.searchOpen);
	const dispatch = useDispatch();

	const [search, setSearch] = useState('');
	const [products, setProducts] = useState([]);

	const handleSearchChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value);
		const data = await getProducts();
		//@ts-ignore
		setProducts(data.data.filter((e) => e.name.toLowerCase().includes(event.target.value.toLowerCase())));
	};

	return (
		<Modal open={isOpen}>
			<Box className={styles.search}>
				<div className={styles.search_header}>
					<h1>
						<a href="/">Search</a>
					</h1>
					<button onClick={() => dispatch(toggleSearch())}>
						<CloseIcon />
					</button>
				</div>
				<div className={styles.search_container}>
					<input value={search} onChange={handleSearchChange} type="text" placeholder="Search" />
					{
						<Box>
							{/*<React.Suspense>
								<SearchItemList searchItemsList={products} />	
							</React.Suspense>*/}
							{search !== '' && <SearchItemList searchItemsList={products} />}
						</Box>
					}
				</div>
			</Box>
		</Modal>
	);
}
