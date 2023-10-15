import { useCreatePost } from '@/lib/hooks';
import Form from './form';

export default function PostForm() {
	const { values, errors, touched, handleChange, handleSubmit, handleBlur } = useCreatePost();

	const config = [
		{
			value: values.title,
			label: 'title',
			type: 'text',
			readonly: false,
			handleChange,
			errors: errors.title,
			touched: touched.title,
		},
		{
			value: values.content,
			label: 'content',
			type: 'text',
			readonly: false,
			handleChange,
			errors: errors.content,
			touched: touched.content,
		},
		{
			value: values.image,
			label: 'image',
			type: 'file',
			readonly: false,
			handleChange,
			errors: errors.image,
			touched: touched.image,
		},
	];

	return (
		<Form
			config={config}
			btnText="Create Post"
			handleSubmit={handleSubmit}
			handleChange={handleChange}
			handleBlur={handleBlur}
			errors={errors}
			touched={touched}
		/>
	);
}
