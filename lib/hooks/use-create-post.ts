import { Post } from '@/models/home.posts';
import { useFormik } from 'formik';
import postSchema from '@/schemas/post.schema';

export default function useCreatePost() {
	const onSubmit = (values: Post) => {
		console.log(values);
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
