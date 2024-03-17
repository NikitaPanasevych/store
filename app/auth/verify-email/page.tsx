import VerifyEmailForm from '@/components/forms/verify-email-form';
import React from 'react';

const VerificationPage = () => {
	return (
		<div className=" w-full h-full z-[9999] absolute bg-[#F8F6F4] grid content-center justify-center">
			<VerifyEmailForm />
		</div>
	);
};

export default VerificationPage;
