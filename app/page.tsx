import { TextGenerateEffect } from '@/components/text-generate';
import styles from './styles.module.scss';
import React from 'react';

export default async function Home() {
	const callouts = [
		{
			name: 'Desk and Office',
			description: 'Work from home accessories',
			imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
			imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
			href: '#',
		},
		{
			name: 'Self-Improvement',
			description: 'Journals and note-taking',
			imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
			imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
			href: '#',
		},
		{
			name: 'Travel',
			description: 'Daily commute essentials',
			imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
			imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
			href: '#',
		},
		{
			name: 'Travel',
			description: 'Daily commute essentials',
			imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
			imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
			href: '#',
		},
	];

	return (
		<main className={styles.home}>
			<div className="relative isolate px-6 pt-14 lg:px-8 ">
				<div>
					<div className="absolute h-full inset-0 z-[-1] ">
						<div className={styles.bg} />
					</div>
				</div>
				<div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
					<div className="text-center">
						<h1>
							<TextGenerateEffect
								words="Raised from the stone below, our story begins"
								className="text-[3rem] font-bold tracking-tight text-light sm:text-[4rem] leading-[4rem]"
							/>
						</h1>
						<p className="mt-6 text-[2rem] leading-8 text-gray-200">
							We import wines from small producers in lesser known France and Italy.
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-20">
							<a
								href="#"
								className="text-[1.6rem] font-semibold leading-6 text-gray-200 transition-all duration-200 hover:text-primary "
							>
								Learn more <span aria-hidden="true">→</span>
							</a>
						</div>
					</div>
				</div>
				<div
					className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
					aria-hidden="true"
				>
					<div
						className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
						style={{
							clipPath:
								'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
						}}
					/>
				</div>
			</div>
			<div className="bg-gray-100">
				<div className="flex justify-center px-4 sm:px-6 lg:px-8">
					<div className=" max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32 lg:w-[120rem]">
						<h2 className="text-6xl font-bold text-gray-900">Collections</h2>
						<div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
							{callouts.map((callout) => (
								<div key={callout.name} className="group relative">
									<div className="relative w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-auto">
										<img
											src={callout.imageSrc}
											alt={callout.imageAlt}
											className="h-full w-full object-cover object-center"
										/>
									</div>
									<h3 className="mt-6 text-3xl text-gray-500">
										<a href={callout.href}>
											<span className="absolute inset-0" />
											{callout.name}
										</a>
									</h3>
									<p className="text-xl font-semibold text-gray-900">{callout.description}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
