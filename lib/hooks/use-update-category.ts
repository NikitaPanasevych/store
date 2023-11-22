import { Categories } from '@/models/shop.categories';
import categoriesSchema from '@/schemas/categories.schema';

import { useFormik } from 'formik';

export default function useUpdateCategory(type: string | undefined, initialValues: Categories) {
	const onSubmit = async (values: Categories) => {
		await fetch(`/api/admin/create-category/${type}`, {
			method: 'PUT',
			body: JSON.stringify(values),
			headers: {
				'Content-Type': 'application/json',
			},
		});
	};

	const { values, errors, touched, handleChange, handleSubmit, handleBlur } = useFormik({
		initialValues,
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
