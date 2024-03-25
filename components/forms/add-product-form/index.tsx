'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import styles from './styles.module.scss';
import Image from 'next/image';

import { CnButton } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useEffect, useState, useTransition } from 'react';
import { Card } from '../../ui/card';
import productSchema from '@/schemas/product.schema';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'react-toastify';
import getCategory from '@/actions/getCategory';
import DropdownMenu from '@/components/dropdown';

const fields: any = [
	'name',
	'price',
	'description',
	'image',
	'year',
	'alcohol',
	'volume',
	'quantity',
	'categoryName',
	'countryName',
	'grapeName',
];

export function ProductForm() {
	const [error, setError] = useState<string | undefined>('');
	const [success, setSuccess] = useState<string | undefined>('');
	const [isPending, startTransition] = useTransition();
	const [selectedImage, setSelectedImage] = useState<string | undefined>('');
	const [categories, setCategories] = useState<any>({
		types: [],
		grapes: [],
		countries: [],
	});

	const fetchCategory = async () => {
		try {
			const data = await getCategory('all');
			setCategories(data);
		} catch (error) {
			console.error('Error fetching categories:', error);
			toast.error('Failed to fetch categories. Please try again.');
		}
	};

	useEffect(() => {
		fetchCategory();
	}, []);

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

	const handleCategoryChange = (value: string, field: 'categoryName' | 'countryName' | 'grapeName') => {
		console.log(value, field);
		form.setValue(field, value);
	};

	async function onSubmit(values: z.infer<typeof productSchema>, e: any) {
		setError('');
		setSuccess('');
		console.log(values);

		startTransition(() => {
			fetch('/api/admin/product', {
				method: 'POST',
				body: JSON.stringify(selectedImage ? { ...values, image: selectedImage } : { ...values, image: '' }),
				headers: {
					'Content-Type': 'application/json',
				},
			})
				.then((res) => {
					if (!res.ok) {
						throw new Error('Failed to create product');
					}
					return res.json();
				})
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
				<form onSubmit={form.handleSubmit(onSubmit)} className={`${styles.form}  w-[70%] m-auto p-8`}>
					{fields.map((item: string) => (
						<FormField
							control={form.control}
							//@ts-ignore
							name={item}
							render={({ field }) => (
								<FormItem className={styles[item]} key={item}>
									<FormLabel className="text-2xl">{item}</FormLabel>
									{item === 'image' ? (
										<>
											{/*selectedImage && (
												<Image
													src={selectedImage}
													alt="product image"
													width={200}
													height={200}
													className="mt-2"
												/>
											)*/}
											<Input
												className=" flex justify-center align-middle mt-2"
												type="file"
												onChange={handleChangeImage}
											/>
										</>
									) : item === 'description' ? (
										<Textarea {...field} id={item} placeholder={item} className="text-2xl" />
									) : item === 'price' ||
									  item === 'alcohol' ||
									  item === 'volume' ||
									  item === 'year' ||
									  item === 'quantity' ? (
										<Input
											{...field}
											id={item}
											onChange={(e) =>
												e.target.value === ''
													? field.onChange(0)
													: field.onChange(parseFloat(e.target.value))
											}
											placeholder={item}
											className="text-2xl"
										/>
									) : item === 'categoryName' ? (
										<DropdownMenu
											name={item}
											handleChange={handleCategoryChange}
											category={categories.types}
										/>
									) : item === 'countryName' ? (
										<DropdownMenu
											name={item}
											handleChange={handleCategoryChange}
											category={categories.countries}
										/>
									) : item === 'grapeName' ? (
										<DropdownMenu
											name={item}
											handleChange={handleCategoryChange}
											category={categories.grapes}
										/>
									) : (
										<Input {...field} id={item} placeholder={item} className="text-2xl" />
									)}
									<FormMessage />
								</FormItem>
							)}
						/>
					))}
					{isPending ? (
						<CnButton type="submit" className={`${styles.submit} mt-4`} disabled>
							Creating...
						</CnButton>
					) : (
						<CnButton type="submit" className={`${styles.submit} mt-4`}>
							Submit
						</CnButton>
					)}
				</form>
			</Form>
		</Card>
	);
}
