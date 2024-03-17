'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { CnButton } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RegisterFormSchema } from '@/schemas/register.schema';
import { useState, useTransition } from 'react';
import { register } from '@/actions/register';
import { Card } from '../ui/card';
import { Social } from './socials';

export function RegisterForm() {
	const [error, setError] = useState<string | undefined>('');
	const [success, setSuccess] = useState<string | undefined>('');
	const [isPending, startTransition] = useTransition();

	const form = useForm<z.infer<typeof RegisterFormSchema>>({
		resolver: zodResolver(RegisterFormSchema),
		defaultValues: {
			email: '',
			password: '',
			confirmPassword: '',
		},
	});

	async function onSubmit(values: z.infer<typeof RegisterFormSchema>) {
		setError('');
		setSuccess('');

		startTransition(() => {
			register(values).then((data) => {
				setError(data?.error);
				setSuccess(data?.success);
			});
		});
	}

	return (
		<Card className="px-16 py-10 w-[50%]">
			<h1 className="text-4xl font-semibold mb-8 text-center">Registration</h1>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 min-w-[40%]">
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
									<Input className="text-[1.4rem]" placeholder="password" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="confirmPassword"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-[1.4rem]">Confirm Password</FormLabel>
								<FormControl>
									<Input className="text-[1.4rem]" placeholder="confirn password" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					{error && (
						<Card className="bg-red-100 p-4 rounded">
							<p className="text-red-500 text-center text-xl">{error}</p>
						</Card>
					)}
					{success && (
						<Card className="bg-green-100 p-4 rounded">
							<p className="text-green-500 text-center text-xl">{success}</p>
						</Card>
					)}
					<CnButton className="rounded w-full" type="submit">
						Submit
					</CnButton>
					<Social />
					<p className="text-[1.4rem] flex justify-between">
						<span>Already have an account?</span>
						<a href="/auth/login" className="text-blue-500">
							Log in
						</a>
					</p>
				</form>
			</Form>
		</Card>
	);
}
