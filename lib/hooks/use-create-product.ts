import { ProductProps } from '@/models/shop.product';
import productSchema from '@/schemas/product.schema';
import { useFormik } from 'formik';

export default function useCreateProduct() {
	const onSubmit = async (values: ProductProps) => {
		console.log(values);
	};

	const { values, errors, touched, handleChange, handleSubmit, handleBlur } = useFormik({
		initialValues: {
			name: '',
			price: 0,
			description: '',
			image: '',
			year: 0,
			alcohol: 0,
			quantity: 0,
			category: '',
			country: '',
			grape: '',
		},
		validationSchema: productSchema,
		onSubmit,
	});

	return {
		values,
		errors,
		touched,
		handleChange,
		handleSubmit,
		handleBlur,
	};
}
