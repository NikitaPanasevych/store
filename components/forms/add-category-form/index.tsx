import { Card } from '@/components/ui/card';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import styles from './styles.module.scss';
import { CnButton } from '@/components/ui/button';

export interface CategoriesFormProps {
	name?: string | undefined;
}

export default function CategoriesForm(props: CategoriesFormProps) {
	const { name } = props;

	const CategorySchema = z.object({
		name: z.string().min(1).max(255),
	});

	const form = useForm<z.infer<typeof CategorySchema>>({
		resolver: zodResolver(CategorySchema),
		defaultValues: {
			name: '',
		},
	});

	const onSubmit = async (data: z.infer<typeof CategorySchema>) => {
		console.log(data);
	};

	return (
		<Card className="p-10 flex flex-col h-full">
			<h1 className="text-4xl font-semibold mt-4 text-center">Create new category</h1>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className={`${styles.form}  w-[70%] m-auto p-8 `}>
					<FormField
						name="name"
						control={form.control}
						render={({ field }) => (
							<FormItem className={styles.name} key="name">
								<FormLabel className="text-2xl">Name</FormLabel>
								<Input {...field} />
								<FormControl {...field} />
								<FormMessage>{form.formState.errors.name?.message}</FormMessage>
							</FormItem>
						)}
					/>
					<CnButton type="submit" className=" rounded mt-6">
						Submit
					</CnButton>
				</form>
			</Form>
		</Card>
	);
}
