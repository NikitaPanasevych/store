import { ChangeEvent, FormEvent } from 'react';
import { Input } from './input';

interface Config {
	value: string;
	type: string;
	readonly?: boolean;
	label: string;
}

interface Props {
	config: Config[];
	errors?: any;
	touched?: any;
	btnText: string;
	isLoading: boolean;
	handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
	handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
	handleBlur: (e: any) => void;
}

export const Form = ({
	config,
	errors,
	touched,
	btnText,
	isLoading,
	handleSubmit,
	handleChange,
	handleBlur,
}: Props) => {
	return (
		<form onSubmit={handleSubmit} method="POST" autoComplete="off">
			<fieldset>
				{config.map((item, index) => (
					<Input
						key={index}
						label={item.label}
						type={item.type}
						value={item.value}
						handleChange={handleChange}
						handleBlur={handleBlur}
						readonly={item.readonly}
					>
						{item.label}
					</Input>
				))}
			</fieldset>
		</form>
	);
};
