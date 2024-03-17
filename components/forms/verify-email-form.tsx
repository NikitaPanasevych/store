'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { Card } from '../ui/card';
import { useSearchParams } from 'next/navigation';
import { verifyEmail } from '@/actions/verifyEmail';
import { CnButton } from '../ui/button';
import Link from 'next/link';
import { FallingLines } from 'react-loader-spinner';

const VerifyEmailForm = () => {
	const [error, setError] = useState<string | undefined>();
	const [success, setSuccess] = useState<string | undefined>();

	const searchParams = useSearchParams();

	const token = searchParams.get('token');

	const onSubmit = useCallback(() => {
		if (!token) {
			setError('Invalid token');
			return;
		}

		verifyEmail(token)
			.then((data) => {
				setSuccess(data.success);
				setError(data.error);
			})
			.catch(() => {
				setError('Something went wrong!');
			});
	}, [token, success, error]);

	useEffect(() => {
		onSubmit();
	}, [onSubmit]);

	return (
		<Card className="bg-white w-[50rem] h-[22.5rem] shadow-xl p-10 flex flex-col gap-8">
			<h1 className="text-4xl font-semibold mb-4 text-center">Email verification</h1>
			{!success && !error && (
				<div className="flex w-full justify-center align-middle">
					<FallingLines visible={true} height="50" width="50" color="#000000" />
				</div>
			)}
			{error && (
				<Card className="bg-red-100 p-4 rounded">
					<p className="text-red-500 text-center text-2xl">{error}</p>
				</Card>
			)}
			{success && (
				<Card className="bg-green-100 p-4 rounded">
					<p className="text-green-500 text-center text-2xl">{success}</p>
				</Card>
			)}
			<CnButton className=" rounded w-full">
				<Link className="w-full h-full" href="/auth/login">
					Go back to login
				</Link>
			</CnButton>
		</Card>
	);
};

export default VerifyEmailForm;
