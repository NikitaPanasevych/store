import { ChangeEvent } from 'react';

interface InputProps {
	value: string;
	label: string;
	type: string;
	readonly?: boolean;
	handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
	handleBlur: (e: any) => void;
	errors?: any;
	children?: React.ReactNode;
}

export const Input = ({ value, label, type, readonly, handleChange, handleBlur, errors, children }: InputProps) => {
	return (
		<>
			<label htmlFor={label}>{children}</label>
			<input
				readOnly={readonly}
				name={label}
				value={value}
				onChange={handleChange}
				onBlur={handleBlur}
				type={type}
			/>
		</>
	);
};
