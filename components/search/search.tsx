import { ProductProps } from '@/models/shop.product';
import { List } from '@mui/material';
import React from 'react';
import styles from './styles.module.scss';

interface SearchItemListProps {
	searchItemsList: ProductProps[];
}

interface SearchItemProps {
	name: string;
	image: string;
	price: number;
}

export const SearchItem = (props: SearchItemProps) => {
	const { name, image, price } = props;

	return <div>{name}</div>;
};

export const SearchItemList = (props: SearchItemListProps) => {
	const { searchItemsList } = props;

	return (
		<List>
			{searchItemsList.map((item) => (
				<SearchItem name={item.name} image={item.image} price={item.price} />
			))}
		</List>
	);
};
