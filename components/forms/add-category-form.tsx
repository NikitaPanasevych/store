import { useCreateCategory } from '@/lib/hooks';
import Form from './form';

export interface CategoriesFormProps {
	name?: string | undefined;
}

export default function CategoriesForm(props: CategoriesFormProps) {
	const { name } = props;
	const { values, errors, touched, handleChange, handleSubmit, handleBlur } = useCreateCategory(name);

	const config = [
		{
			value: values.name,
			label: 'name',
			type: 'text',
			readonly: false,
			handleChange,
			errors: errors.name,
			touched: touched.name,
			categoryType: name,
		},
	];

	return (
		<Form
			config={config}
			btnText={`Add new ${name}`}
			handleSubmit={handleSubmit}
			handleChange={handleChange}
			handleBlur={handleBlur}
			errors={errors}
			touched={touched}
		/>
	);
}
