import { useCreateGrape } from '@/lib/hooks';
import Form from './form';

export default function GrapeForm() {
	const { values, errors, touched, handleChange, handleSubmit, handleBlur } = useCreateGrape();

	const config = [
		{
			value: values.name,
			label: 'name',
			type: 'text',
			readonly: false,
			handleChange,
			errors: errors.name,
			touched: touched.name,
		},
	];

	return (
		<Form
			config={config}
			btnText="Create a new grape group"
			handleSubmit={handleSubmit}
			handleChange={handleChange}
			handleBlur={handleBlur}
			errors={errors}
			touched={touched}
		/>
	);
}
