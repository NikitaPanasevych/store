'use client';

import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { useSearchParams } from 'next/navigation';

import { CnButton } from '@/components/ui/button';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';

export const Social = () => {
	const searchParams = useSearchParams();
	const callbackUrl = searchParams.get('callbackUrl');

	const onClick = (provider: 'google') => {
		signIn(provider, {
			callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
		});
	};

	return (
		<>
			<div className="flex items-center w-full gap-x-8 px-8">
				<CnButton
					onClick={() => onClick('google')}
					className="flex items-center justify-center w-full gap-x-4 rounded hover:bg-gray-100"
					variant="outline"
				>
					<FcGoogle className="text-4xl" />
					<span>Google</span>
				</CnButton>
				<CnButton
					className="flex items-center justify-center w-full gap-x-4 rounded hover:bg-gray-100"
					variant="outline"
				>
					<FaGithub className="text-4xl" />
					<span>Github</span>
				</CnButton>
			</div>
		</>
	);
};
