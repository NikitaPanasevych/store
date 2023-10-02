'use client';

import Button from '@/UI/button';
import Image from 'next/image';
import styles from './styles.module.scss';
import axios from 'axios';
import { Post } from '@/models/home.posts';

export default async function Home() {
	const posts = await axios
		.get('http://localhost:3000/api/home')
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.log(err);
		});

	return (
		<main className={styles.home}>
			{posts.data.map((post: Post) => {
				return (
					<div className={styles.home__element}>
						<div className={styles.home__element__image}>
							<Image src={post.image} alt="post image" fill={true} />
						</div>
						<div className={styles.home__element__description}>
							<h2>{post.title}</h2>
							<p>{post.content}</p>
							<div className={styles.home__element__description__button}>
								<Button>
									<a href="">Explore</a>
								</Button>
							</div>
						</div>
					</div>
				);
			})}
		</main>
	);
}
