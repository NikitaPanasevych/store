import { Post } from '@/models/home.posts';
import { useFormik } from 'formik';
import postSchema from '@/schemas/post.schema';
import { toast } from 'react-toastify';

export default function useCreatePost() {
	const onSubmit = async (values: Post) => {
		await fetch('/api/admin/post', {
			method: 'POST',
			body: JSON.stringify(values),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => toast.success('Post created successfully'))
			.catch((err) => toast.error('Error', err));
	};

	const { values, errors, touched, handleChange, handleSubmit, handleBlur } = useFormik({
		initialValues: {
			title: '',
			content: '',
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
