import { StickyScroll } from '@/components/sticky-block';
import styles from './styles.module.scss';
import React from 'react';

export default async function Home() {
	const content = [
		{
			title: 'Collaborative Editing',
			description:
				'Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.',
		},
		{
			title: 'Real time changes',
			description:
				'See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.',
		},
		{
			title: 'Version control',
			description:
				"Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
		},
		{
			title: 'Running out of content',
			description:
				"Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
		},
	];

	return (
		<main className={styles.home}>
			<div className="relative isolate px-6 pt-14 lg:px-8">
				<div>
					<div className="absolute inset-0 z-[-1] ">
						<div className={styles.bg} />
					</div>
				</div>
				<div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
					<div className="text-center">
						<h1 className="text-[3rem] font-bold tracking-tight text-light sm:text-[4rem] leading-[4rem]">
							Raised from the stone below, our story begins
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
			<StickyScroll content={content} />
		</main>
	);
}
