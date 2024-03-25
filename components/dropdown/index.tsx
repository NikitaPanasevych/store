import * as React from 'react';
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';
import { CnButton } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

interface Category {
	id: number;
	name: string;
}

export default function DropdownMenu({ ...props }) {
	const { category, name } = props;
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState('');

	const handleChangeCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
		props.handleChange(e.target.value);
	};

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<CnButton
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className="w-[200px] justify-between rounded"
				>
					{value || category
						? category?.find((item: Category) => item.name === value)?.name
						: 'Select framework...'}
					<CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</CnButton>
			</PopoverTrigger>
			<PopoverContent className="w-[200px] py-5 px-2 z-[9999] bg-light">
				<Command>
					<CommandGroup>
						{!category || category.length === 0
							? null
							: //@ts-ignore
							  category.map((item: Category) => (
									<li
										key={item.id}
										className={cn(
											'flex items-center justify-between  text-2xl cursor-pointer transition-all ease-in-out duration-300 hover:text-active hover:bg-gray-100 p-2 rounded ',
											{
												'bg-gray-100': item.name === value,
											}
										)}
										onClick={() => {
											setValue(item.name);
											props.handleChange(item.name, name);
											setOpen(false);
										}}
									>
										{item.name}
										{item.name === value && <CheckIcon className="h-4 w-4 shrink-0 opacity-50" />}
									</li>
							  ))}
					</CommandGroup>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
