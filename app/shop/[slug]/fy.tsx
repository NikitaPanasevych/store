'use client';

import React from 'react';
import styles from './styles.module.scss';
import { Product } from '../product';

const Fy = () => {
	const products = [
		{
			id: 'clq6qmaic0000v1cojcg023a5',
			name: 'Aalto XX Anniversary 300cl',
			price: 1000,
			image: 'https://res.cloudinary.com/dhpaxigzl/image/upload/v1702651217/wine/vgivvifg0aioqktd9zd2.jpg',
			description:
				'To celebrate their 20th anniversary in 1999, Aalto released this limited-edition jeroboam, from three vintages classified as ‘very good’ by the DO Ribera del Duero. 2016, 2017 and 2018. It’s a concentrated red wine, with intense aromas of red and black fruits, dark chocolate, coffee beans and subtle hints of spice. The palate it is fruity, expressive and very elegant.',
			year: 1980,
			alcohol: 15,
			quantity: 1,
			volume: 750,
			categoryName: 'TypeExpltest',
			countryName: 'USA',
			grapeName: 'grape',
		},
		{
			id: 'clq6qmaic0000v1cojcg023a5',
			name: 'Aalto XX Anniversary 300cl',
			price: 1000,
			image: 'https://res.cloudinary.com/dhpaxigzl/image/upload/v1702651217/wine/vgivvifg0aioqktd9zd2.jpg',
			description:
				'To celebrate their 20th anniversary in 1999, Aalto released this limited-edition jeroboam, from three vintages classified as ‘very good’ by the DO Ribera del Duero. 2016, 2017 and 2018. It’s a concentrated red wine, with intense aromas of red and black fruits, dark chocolate, coffee beans and subtle hints of spice. The palate it is fruity, expressive and very elegant.',
			year: 1980,
			alcohol: 15,
			quantity: 1,
			volume: 750,
			categoryName: 'TypeExpltest',
			countryName: 'USA',
			grapeName: 'grape',
		},
		{
			id: 'clq6qmaic0000v1cojcg023a5',
			name: 'Aalto XX Anniversary 300cl',
			price: 1000,
			image: 'https://res.cloudinary.com/dhpaxigzl/image/upload/v1702651217/wine/vgivvifg0aioqktd9zd2.jpg',
			description:
				'To celebrate their 20th anniversary in 1999, Aalto released this limited-edition jeroboam, from three vintages classified as ‘very good’ by the DO Ribera del Duero. 2016, 2017 and 2018. It’s a concentrated red wine, with intense aromas of red and black fruits, dark chocolate, coffee beans and subtle hints of spice. The palate it is fruity, expressive and very elegant.',
			year: 1980,
			alcohol: 15,
			quantity: 1,
			volume: 750,
			categoryName: 'TypeExpltest',
			countryName: 'USA',
			grapeName: 'grape',
		},
		{
			id: 'clq6qmaic0000v1cojcg023a5',
			name: 'Aalto XX Anniversary 300cl',
			price: 1000,
			image: 'https://res.cloudinary.com/dhpaxigzl/image/upload/v1702651217/wine/vgivvifg0aioqktd9zd2.jpg',
			description:
				'To celebrate their 20th anniversary in 1999, Aalto released this limited-edition jeroboam, from three vintages classified as ‘very good’ by the DO Ribera del Duero. 2016, 2017 and 2018. It’s a concentrated red wine, with intense aromas of red and black fruits, dark chocolate, coffee beans and subtle hints of spice. The palate it is fruity, expressive and very elegant.',
			year: 1980,
			alcohol: 15,
			quantity: 1,
			volume: 750,
			categoryName: 'TypeExpltest',
			countryName: 'USA',
			grapeName: 'grape',
		},
	];

	return (
		<section className={`${styles.fy} w-full`}>
			<h2 className={styles.fy__title}>You may also like</h2>
			<div className={styles.fy__container}>
				{products.map((product) => (
					<Product key={product.id} product={product} />
				))}
			</div>
		</section>
	);
};

export default Fy;
