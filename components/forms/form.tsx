import { ChangeEvent, FormEvent } from 'react';
import { Input } from './input';

interface Config {
	value: string | number | undefined;
	type: string;
	readonly?: boolean;
	label: string;
	categoryType?: string;
}

interface Props {
	config: Config[];
	errors?: any;
	touched?: any;
	btnText: string;
	handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
	handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
	handleBlur: (e: any) => void;
}

const Form = ({ config, errors, touched, btnText, handleSubmit, handleChange, handleBlur }: Props) => {
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
						errors={errors ? errors[item.label] : null}
						touched={touched ? touched[item.label] : null}
					/>
				))}
			</fieldset>
			<button type="submit">{btnText}</button>
		</form>
	);
};

export default Form;
