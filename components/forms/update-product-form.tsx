import { useUpdateProduct } from '@/lib/hooks';
import { ProductProps } from '@/models/shop.product';
import Form from './form';

interface UpdateProductFormProps {
	product: ProductProps;
}

export default function UpdateProductForm({ product }: UpdateProductFormProps) {
	const { values, errors, touched, handleChange, handleSubmit, handleBlur } = useUpdateProduct(product);

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
			value: values.grapeName,
			type: 'text',
			label: 'grape',
			readonly: false,
			handleChange,
			errors: errors.grapeName,
			touched: touched.grapeName,
		},
		{
			value: values.countryName,
			type: 'text',
			label: 'country',
			readonly: false,
			handleChange,
			errors: errors.countryName,
			touched: touched.countryName,
		},
		{
			value: values.categoryName,
			type: 'text',
			label: 'category',
			readonly: false,
			handleChange,
			errors: errors.categoryName,
			touched: touched.categoryName,
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
			btnText="Update Product"
			handleSubmit={handleSubmit}
			handleChange={handleChange}
			handleBlur={handleBlur}
			errors={errors}
			touched={touched}
		/>
	);
}
