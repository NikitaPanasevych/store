'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import styles from './styles.module.scss';
import Image from 'next/image';

import { CnButton } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { use, useRef, useState, useTransition } from 'react';
import { Card } from '../../ui/card';
import productSchema from '@/schemas/product.schema';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'react-toastify';

export function ProductForm() {
	const [error, setError] = useState<string | undefined>('');
	const [success, setSuccess] = useState<string | undefined>('');
	const [isPending, startTransition] = useTransition();
	const [selectedImage, setSelectedImage] = useState<string | undefined>('');

	const form = useForm<z.infer<typeof productSchema>>({
		resolver: zodResolver(productSchema),
		defaultValues: {
			name: '',
			price: 0,
			description: '',
			image: '',
			year: 0,
			alcohol: 0,
			volume: 0,
			quantity: 0,
			categoryName: '',
			countryName: '',
			grapeName: '',
		},
	});

	const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		const file = e.target.files?.[0];
		if (!file) return;
		if (!file.type.includes('image')) return alert('Please upload an image file');
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => {
			const result = reader.result as string;
			setSelectedImage(result); // Set selected image URL to state
			try {
				form.setValue('image', ''); // Set image field value to empty string
			} catch (e) {
				console.log(e);
			}
		};
	};

	async function onSubmit(values: z.infer<typeof productSchema>, e: any) {
		setError('');
		setSuccess('');

		startTransition(() => {
			fetch('/api/admin/product', {
				method: 'POST',
				body: JSON.stringify(selectedImage ? { ...values, image: selectedImage } : { ...values, image: '' }),
				headers: {
					'Content-Type': 'application/json',
				},
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.message) {
						setSuccess(data.message);
						toast.success(data.message);
					}
				})
				.catch((error) => {
					setError(error.message);
					toast.error(error.message);
				});
		});
	}

	return (
		<Card className="p-10 flex flex-col h-full">
			<h1 className="text-4xl font-semibold mt-4 text-center">Create new product</h1>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className={` ${styles.form}  w-[70%] m-auto p-8`}>
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem className={styles.name}>
								<FormLabel className="text-2xl">name</FormLabel>
								<Input {...field} id="name" placeholder="name" className="text-2xl" />
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="price"
						render={({ field }) => (
							<FormItem className={styles.price}>
								<FormLabel className="text-2xl">price</FormLabel>
								<Input
									{...field}
									onChange={(e) => field.onChange(parseFloat(e.target.value))}
									type="number"
									id="price"
									placeholder="price"
									className="text-2xl"
								/>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="year"
						render={({ field }) => (
							<FormItem className={styles.year}>
								<FormLabel className="text-2xl">year</FormLabel>
								<Input
									{...field}
									type="number"
									id="year"
									placeholder="year"
									className="text-2xl"
									onChange={(e) => field.onChange(parseFloat(e.target.value))}
								/>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="volume"
						render={({ field }) => (
							<FormItem className={styles.volume}>
								<FormLabel className="text-2xl">volume</FormLabel>
								<Input
									{...field}
									onChange={(e) => field.onChange(parseFloat(e.target.value))}
									type="number"
									id="volume"
									placeholder="volume"
									className="text-2xl"
								/>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="quantity"
						render={({ field }) => (
							<FormItem className={styles.quantity}>
								<FormLabel className="text-2xl">quantity</FormLabel>
								<Input
									{...field}
									onChange={(e) => field.onChange(parseFloat(e.target.value))}
									type="number"
									id="quantity"
									placeholder="quantity"
									className="text-2xl"
								/>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="alcohol"
						render={({ field }) => (
							<FormItem className={styles.alcohol}>
								<FormLabel className="text-2xl">alcohol</FormLabel>
								<Input
									{...field}
									onChange={(e) => field.onChange(parseFloat(e.target.value))}
									type="number"
									id="alcohol"
									placeholder="alcohol"
									className="text-2xl"
								/>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="image"
						render={({ field }) => (
							<FormItem className={styles.image}>
								<FormLabel className="">image</FormLabel>
								<Input {...field} type="file" id="image" placeholder="image" onChange={handleChangeImage} />
								<FormMessage />
								{/*selectedImage ? <Image src={selectedImage} alt="Project poster" className="" fill /> : null*/}
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="countryName"
						render={({ field }) => (
							<FormItem className={styles.countryName}>
								<FormLabel className="text-2xl">countryName</FormLabel>
								<Input {...field} id="countryName" placeholder="countryName" className="text-2xl" />
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="categoryName"
						render={({ field }) => (
							<FormItem className={styles.categoryName}>
								<FormLabel className="text-2xl">categoryName</FormLabel>
								<Input {...field} id="categoryName" placeholder="categoryName" className="text-2xl" />
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="grapeName"
						render={({ field }) => (
							<FormItem className={styles.grapeName}>
								<FormLabel className="text-2xl">grapeName</FormLabel>
								<Input {...field} id="grapeName" placeholder="grapeName" className="text-2xl" />
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="description"
						render={({ field }) => (
							<FormItem className={styles.description}>
								<FormLabel className="text-2xl">description</FormLabel>
								<Textarea {...field} id="description" placeholder="description" className="text-2xl" />
								<FormMessage />
							</FormItem>
						)}
					/>
					<CnButton type="submit" className={`${styles.submit} mt-4`}>
						Submit
					</CnButton>
				</form>
			</Form>
		</Card>
	);
}
