'use client';

import styles from './styles.module.scss';
import { useState } from 'react';
import OutsideAlerter from '../wrappers/click-outside';

interface DropdownProps {
	name: string;
	options: string[];
}

export const Dropdown = (props: DropdownProps) => {
	const { name, options } = props;
	const [show, setShow] = useState('hidden');

	return (
		<div
			onClick={(event) => {
				event.stopPropagation();
				setShow('show');
			}}
			className={`${styles.category__element} ${styles[show]}`}
		>
			{name}
			{show === 'show' ? (
				<OutsideAlerter setShow={setShow}>
					<div className={styles.category__list}>
						{options.slice(0, 6).map((option, index) => (
							<div key={index} className={styles.category__list__element}>
								{option}
							</div>
						))}
					</div>
				</OutsideAlerter>
			) : null}
		</div>
	);
};
