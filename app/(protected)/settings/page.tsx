import { auth, signOut } from '@/auth';
import React from 'react';

const page = async () => {
	const session = await auth();

	return (
		<div className=" mt-[20rem] min-h-[100vh]">
			{JSON.stringify(session)}
			<form
				action={async () => {
					'use server';
					await signOut();
				}}
			>
				<button type="submit">Sign Out</button>
			</form>
		</div>
	);
};

export default page;