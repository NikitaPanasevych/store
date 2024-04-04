'use client';

import { Menu, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

interface DropdownProps {
	name?: string | React.ReactNode;
	options: any[];
	className?: string;
}

export default function MyDropdown(props: DropdownProps) {
	const { name, options, className } = props;

	return (
		<div className={`${className} `}>
			<Menu as="div" className="relative inline-block text-left">
				<div>
					<Menu.Button className="inline-flex w-full justify-center rounded bg-black/20 px-4 py-2 text-[1.6rem] font-semibold text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
						{name}
						<ChevronDownIcon className="-mr-1 ml-2 mt-1 h-7 w-7 text-violet-200" aria-hidden="true" />
					</Menu.Button>
				</div>
				<Transition
					as={Fragment}
					enter="transition ease-out duration-100"
					enterFrom="transform opacity-0 scale-95"
					enterTo="transform opacity-100 scale-100"
					leave="transition ease-in duration-75"
					leaveFrom="transform opacity-100 scale-100"
					leaveTo="transform opacity-0 scale-95"
				>
					<Menu.Items className="absolute right-1rem mt-3 w-56  origin-top-right divide-y divide-gray-100 rounded bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
						<div className="px-2 py-2 ">
							{options.slice(0, 6).map((option: any, index) => (
								<Menu.Item key={index}>
									{({ active }) => (
										<button
											className={`${
												active ? ' text-active ' : 'text-dark'
											} group flex w-full items-center rounded px-2 py-2 text-[1.4rem] font-semibold`}
										>
											{option.name}
										</button>
									)}
								</Menu.Item>
							))}
						</div>
					</Menu.Items>
				</Transition>
			</Menu>
		</div>
	);
}
