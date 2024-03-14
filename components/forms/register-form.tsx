'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { CnButton } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RegisterFormSchema } from '@/schemas/register.schema';

export function RegisterForm() {
	const form = useForm<z.infer<typeof RegisterFormSchema>>({
		resolver: zodResolver(RegisterFormSchema),
		defaultValues: {
			email: '',
			password: '',
			confirmPassword: '',
		},
	});

	async function onSubmit(values: z.infer<typeof RegisterFormSchema>) {
		console.log(JSON.stringify(values));
		await fetch('/api/auth/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(values),
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
	}

	return (
		<>
			<h1 className="text-4xl font-semibold mb-8">Registration</h1>
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
					<CnButton className="rounded" type="submit">
						Submit
					</CnButton>
				</form>
			</Form>
		</>
	);
}
