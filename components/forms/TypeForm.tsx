export {};
/*
import { useFormik } from 'formik';
import { useLoginMutation } from '@/redux/features/authApiSlice';
import { toast } from 'react-toastify';
import { setAuth } from '@/redux/features/authSlice';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';


export default function useLogin() {

    const email = useSelector((state: any) => state.emailReducer.email);

    const [login, { isLoading, error, data }] = useLoginMutation();

    const onSubmit = (values: any) => {
        
    };

    const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
        useFormik({
            initialValues: {
                email,
                password: ''
            },
            onSubmit
        });

    return {
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        handleBlur,
        isLoading
    };
}*/
