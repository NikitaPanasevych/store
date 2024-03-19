'use client';

import { toggleSearch } from '@/redux/features/search.slice';
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useDispatch } from 'react-redux';

const Search = () => {
	const dispatch = useDispatch();

	return (
		<div className=" translate-y-6" onClick={() => dispatch(toggleSearch())}>
			<AiOutlineSearch />
		</div>
	);
};

export default Search;
