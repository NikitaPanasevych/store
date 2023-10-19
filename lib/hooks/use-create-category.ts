import { Categories } from '@/models/shop.categories';
import categoriesSchema from '@/schemas/categories.schema';

import { useFormik } from 'formik';

export default function useCreateCategory(type: string | undefined) {
	const onSubmit = async (values: Categories) => {
		const { name } = values;
		await fetch(`/api/admin/create-category/${type}`, {
			method: 'POST',
			body: JSON.stringify({ name }),
			headers: {
				'Content-Type': 'application/json',
			},
		});
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
