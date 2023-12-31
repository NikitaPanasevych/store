import { Post } from '@/models/home.posts';
import { useFormik } from 'formik';
import postSchema from '@/schemas/post.schema';
import { toast } from 'react-toastify';

export default function useUpdatePost(initialValues: Post) {
	const onSubmit = async (values: Post) => {
		await fetch('/api/admin/post', {
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
		initialValues: {
			id: initialValues.id,
			title: initialValues.title,
			content: initialValues.content,
			image: '',
		},
		validationSchema: postSchema,
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
