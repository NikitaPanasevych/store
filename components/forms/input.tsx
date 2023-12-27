import { ChangeEvent } from 'react';
import styles from './styles.module.scss';

interface InputProps {
	value: string | number | undefined;
	label: string;
	type: string;
	readonly?: boolean;
	handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
	handleBlur: (e: any) => void;
	errors?: any;
	touched?: any;
}

export const Input = ({ value, label, type, readonly, handleChange, handleBlur, errors, touched }: InputProps) => {
	return (
		<>
			<label htmlFor={label}>{label}</label>
			<input
				className={styles.input}
				id={label}
				readOnly={readonly}
				name={label}
				value={value}
				onChange={handleChange}
				onBlur={handleBlur}
				type={type}
			/>
			{errors && touched ? <p>{errors}</p> : null}
		</>
	);
};
