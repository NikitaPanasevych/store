'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { CnButton } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
	email: z.string().email({
		message: 'Invalid email address.',
	}),
	name: z.string(),
	cardNumber: z.string(),
	expiryDate: z.string(),
	cvc: z.string(),
	address: z.string(),
	city: z.string(),
	zip: z.string(),
	country: z.string(),
	phone: z.string(),
});

export function CheckoutForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			name: '',
			cardNumber: '',
			expiryDate: '',
			cvc: '',
			address: '',
			city: '',
			zip: '',
			country: '',
			phone: '',
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className=" bg-white mx-auto grid grid-cols-3 grid-rows-7 space-y-6 max-w-[700px] rounded-2xl shadow-xl border-2 p-20 gap-4"
			>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem className=" col-span-3 row-span-1">
							<FormLabel className=" text-2xl">Email</FormLabel>
							<FormControl>
								<Input className=" text-xl" placeholder="example@mail.com" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem className=" col-span-3 row-span-1">
							<FormLabel className=" text-2xl">Name on card</FormLabel>
							<FormControl>
								<Input className=" text-xl" placeholder="John Smith" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="cardNumber"
					render={({ field }) => (
						<FormItem className=" col-span-3 row-span-1">
							<FormLabel className=" text-2xl">Card number</FormLabel>
							<FormControl>
								<Input className=" text-xl" placeholder="0000 0000 0000 0000" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="expiryDate"
					render={({ field }) => (
						<FormItem className=" col-span-2 row-span-1">
							<FormLabel className=" text-2xl">Expiry date</FormLabel>
							<FormControl>
								<Input className=" text-xl" placeholder="MM/YY" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="cvc"
					render={({ field }) => (
						<FormItem className=" col-span-1 row-span-1">
							<FormLabel className=" text-2xl">CVC</FormLabel>
							<FormControl>
								<Input className=" text-xl" placeholder="000" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="address"
					render={({ field }) => (
						<FormItem className=" col-span-2 row-span-1">
							<FormLabel className=" text-2xl">Address</FormLabel>
							<FormControl>
								<Input className=" text-xl" placeholder="1234 Elm St." {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="city"
					render={({ field }) => (
						<FormItem className=" col-span-1 row-span-1">
							<FormLabel className=" text-2xl">City</FormLabel>
							<FormControl>
								<Input className=" text-xl" placeholder="Springfield" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="zip"
					render={({ field }) => (
						<FormItem className=" col-span-1 row-span-1">
							<FormLabel className=" text-2xl">ZIP</FormLabel>
							<FormControl>
								<Input className=" text-xl" placeholder="12345" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="country"
					render={({ field }) => (
						<FormItem className=" col-span-1 row-span-1">
							<FormLabel className=" text-2xl">Country</FormLabel>
							<FormControl>
								<Input className=" text-xl" placeholder="United States" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="phone"
					render={({ field }) => (
						<FormItem className=" col-span-1 row-span-1">
							<FormLabel className=" text-2xl">Phone</FormLabel>
							<FormControl>
								<Input className=" text-xl" placeholder="123-456-7890" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<CnButton className=" col-span-3 row-span-1" type="submit">
					Submit
				</CnButton>
			</form>
		</Form>
	);
}
