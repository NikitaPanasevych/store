import * as Yup from 'yup';

const categoriesSchema = Yup.object().shape({
	name: Yup.string().required('Name is required'),
});

export default categoriesSchema;
