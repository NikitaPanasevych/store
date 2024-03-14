import React from 'react';
import styles from './styles.module.scss';
import { LoginForm } from '@/components/forms/login-form';

const page = () => {
	return (
		<div className={styles.page}>
			<div className={styles.page__image}>
				<img
					src="https://static.independent.co.uk/2023/09/26/15/Blank%202048%20x%201536%20-%202023-09-26T152653.277.png"
					alt="background image"
				/>
			</div>
			<div className={styles.page__form}>
				<LoginForm />
			</div>
		</div>
	);
};

export default page;
