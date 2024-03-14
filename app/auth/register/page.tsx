import React from 'react';
import styles from './styles.module.scss';
import { RegisterForm } from '@/components/forms/register-form';

const page = () => {
	return (
		<div className={styles.page}>
			<div className={styles.page__image}>
				<img src="https://content.fortune.com/wp-content/uploads/2022/02/IMG_4901.jpg" alt="background image" />
			</div>
			<div className={styles.page__form}>
				<RegisterForm />
			</div>
		</div>
	);
};

export default page;
