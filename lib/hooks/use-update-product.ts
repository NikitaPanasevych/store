import { ProductProps } from '@/models/shop.product';
import productSchema from '@/schemas/product.schema';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';

export default function useUpdateProduct(initialValues: ProductProps) {
	const onSubmit = async (values: ProductProps) => {
		await fetch('/api/admin/product', {
			method: 'PUT',
			body: JSON.stringify(values),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => toast.success('Post updated successfully'))
			.catch((err) => toast.error('Error', err));
	};

	const { values, errors, touched, handleChange, handleSubmit, handleBlur } = useFormik({
		initialValues,
		//validationSchema: productSchema,
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
