import React from 'react';
import { CnButton } from '../ui/button';
import Link from 'next/link';
import { auth } from '@/auth';
import { FaUserCircle } from 'react-icons/fa';
import MyDropdown from './newDropdown';

const AuthBlock = async () => {
	const session = await auth();

	return (
		<>
			{!session ? (
				<div className=" grid grid-cols-2 h-full w-full min-w-80">
					<CnButton className="rounded-xl text-xl  w-[8rem] m-auto hover:text-active">
						<Link href="/auth/login">Login</Link>
					</CnButton>
					<CnButton className="rounded-xl text-xl m-auto w-[8rem] border-2 hover:text-active" variant="secondary">
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
