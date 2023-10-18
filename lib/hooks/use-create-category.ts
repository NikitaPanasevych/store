import { Categories } from '@/models/shop.categories';
import categoriesSchema from '@/schemas/categories.schema';

import { useFormik } from 'formik';

export default function useCreateCategory(name: string | undefined) {
	const onSubmit = async (values: Categories) => {
		console.log(values, name);
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
