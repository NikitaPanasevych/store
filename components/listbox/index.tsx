'use client';

import styles from './styles.module.scss';

interface ListBoxProps {
	name: string;
	options: string[];
}

export const Listbox = (props: ListBoxProps) => {
	const { name, options } = props;

	return (
		<select className={styles.listbox}>
			<label htmlFor="options">{name}</label>
			{options.map((option) => (
				<option value={option}>{option}</option>
			))}
		</select>
	);
};
