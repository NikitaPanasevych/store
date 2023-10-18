import * as Yup from 'yup';

const productSchema = Yup.object().shape({
	name: Yup.string().required('Name is required'),
	price: Yup.number().required('Price is required'),
	description: Yup.string().required('Description is required'),
	image: Yup.string().required('Image is required'),
	year: Yup.number().required('Year is required'),
	alcohol: Yup.number().required('Alcohol is required'),
	quantity: Yup.number().required('Quantity is required'),
	category: Yup.string().required('Type is required'),
	country: Yup.string().required('Country is required'),
	grape: Yup.string().required('Grape is required'),
});

export default productSchema;
