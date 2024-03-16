'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { loginSchema } from '@/schemas/login.schema';

import { CnButton } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useState, useTransition } from 'react';
import { login } from '@/actions/login';
import { Social } from './socials';
import { Card } from '../ui/card';

export function LoginForm() {
	const [error, setError] = useState<string | undefined>('');
	const [success, setSuccess] = useState<string | undefined>('');
	const [isPending, startTransition] = useTransition();

	const form = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	async function onSubmit(values: z.infer<typeof loginSchema>) {
		setError('');
		setSuccess('');

		startTransition(() => {
			login(values)
				.then((data) => {
					if (data?.error) {
						form.reset();
						setError(data.error);
						console.error(data.error);
					}
				})
				.catch(() => setError('Something went wrong'));
		});
	}

	return (
		<Card className="px-16 py-10 w-[50%]">
			<h1 className="text-4xl font-semibold mb-6 text-center">Login</h1>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 min-w-[40%]">
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-[1.4rem]">Email</FormLabel>
								<FormControl>
									<Input className="text-[1.4rem]" placeholder="email@example.com" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-[1.4rem]">Password</FormLabel>
								<FormControl>
									<Input type="password" className="text-[1.4rem]" placeholder="password" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<p className="text-[1.4rem]">
						<a href="/auth/forgot-password" className="text-blue-500">
							Forgot Password?
						</a>
					</p>
					{error && <p className="text-red-500 text-center">{error}</p>}
					<CnButton className="rounded w-full" type="submit">
						Login
					</CnButton>
					<Social />
					<p className="text-[1.4rem] flex justify-between">
						<span>Don't have an account? </span>
						<a href="/auth/register" className="text-blue-500">
							Register
						</a>
					</p>
				</form>
			</Form>
		</Card>
	);
}
