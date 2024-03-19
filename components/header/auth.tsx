import React from 'react';
import { CnButton } from '../ui/button';
import Link from 'next/link';
import { auth } from '@/auth';
import { FaUserCircle } from 'react-icons/fa';
import MyDropdown from './newDropdown';

const AuthBlock = async () => {
	const session = true;

	return (
		<>
			{!session ? (
				<div className=" grid grid-flow-col gap-4 h-full w-full min-w-80">
					<CnButton className="rounded-xl m-auto hover:text-active">
						<Link href="/auth/login">Login</Link>
					</CnButton>
					<CnButton className="rounded-xl m-auto border-2 hover:text-active" variant="secondary">
						<Link href="/auth/register">Register</Link>
					</CnButton>
				</div>
			) : (
				<div className="flex justify-end align-middle">
					<Link className="m-auto" href="/account">
						<FaUserCircle />
					</Link>
				</div>
			)}
		</>
	);
};

export default AuthBlock;
