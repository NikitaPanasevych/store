import { useUpdateCategory } from '@/lib/hooks';
import { Categories } from '@/models/shop.categories';
import Form from './form';

export interface CategoriesFormProps {
	name?: string | undefined;
	category: Categories;
}

export default function UpdateCategoriesForm(props: CategoriesFormProps) {
	const { name, category } = props;
	const { values, errors, touched, handleChange, handleSubmit, handleBlur } = useUpdateCategory(name, category);

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
			btnText={`Update ${name}`}
			handleSubmit={handleSubmit}
			handleChange={handleChange}
			handleBlur={handleBlur}
			errors={errors}
			touched={touched}
		/>
	);
}
