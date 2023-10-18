import { Grape } from '@/models/shop.grapes';
import categoriesSchema from '@/schemas/categories.schema';
import productSchema from '@/schemas/product.schema';
import { useFormik } from 'formik';

export default function useCreateGrape() {
	const onSubmit = async (values: Grape) => {
		console.log(values);
	};

	const { values, errors, touched, handleChange, handleSubmit, handleBlur } = useFormik({
		initialValues: {
			name: '',
		},
		validationSchema: categoriesSchema,
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
