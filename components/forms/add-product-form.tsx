import { useCreateProduct } from '@/lib/hooks';
import Form from './form';

export default function ProductForm() {
	const { values, errors, touched, handleChange, handleSubmit, handleBlur } = useCreateProduct();

	const config = [
		{
			value: values.name,
			type: 'text',
			label: 'name',
			readonly: false,
			handleChange,
			errors: errors.name,
			touched: touched.name,
		},
		{
			value: values.description,
			type: 'text',
			label: 'description',
			readonly: false,
			handleChange,
			errors: errors.description,
			touched: touched.description,
		},
		{
			value: values.year,
			type: 'number',
			label: 'year',
			readonly: false,
			handleChange,
			errors: errors.year,
			touched: touched.year,
		},
		{
			value: values.alcohol,
			type: 'number',
			label: 'alcohol',
			readonly: false,
			handleChange,
			errors: errors.alcohol,
			touched: touched.alcohol,
		},
		{
			value: values.price,
			type: 'number',
			label: 'price',
			readonly: false,
			handleChange,
			errors: errors.price,
			touched: touched.price,
		},
		{
			value: values.image,
			type: 'text',
			label: 'image',
			readonly: false,
			handleChange,
			errors: errors.image,
			touched: touched.image,
		},
		{
			value: values.volume,
			type: 'number',
			label: 'volume',
			readonly: false,
			handleChange,
			errors: errors.volume,
			touched: touched.volume,
		},
		{
			value: values.grape,
			type: 'text',
			label: 'grape',
			readonly: false,
			handleChange,
			errors: errors.grape,
			touched: touched.grape,
		},
		{
			value: values.country,
			type: 'text',
			label: 'country',
			readonly: false,
			handleChange,
			errors: errors.country,
			touched: touched.country,
		},
		{
			value: values.category,
			type: 'text',
			label: 'category',
			readonly: false,
			handleChange,
			errors: errors.category,
			touched: touched.category,
		},
		{
			value: values.quantity,
			type: 'number',
			label: 'quantity',
			readonly: false,
			handleChange,
			errors: errors.quantity,
			touched: touched.quantity,
		},
	];

	return (
		<Form
			config={config}
			btnText="Create Product"
			handleSubmit={handleSubmit}
			handleChange={handleChange}
			handleBlur={handleBlur}
			errors={errors}
			touched={touched}
		/>
	);
}
