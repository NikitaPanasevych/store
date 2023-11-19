import Button from '@/UI/button';
import Image from 'next/image';
import styles from './styles.module.scss';
import { Post } from '@/models/home.posts';
import { getPosts } from '@/lib/services';
import React, { useEffect, useState } from 'react';

export default async function Home() {
	const posts = await getPosts();

	return (
		<main className={styles.home}>
			{posts.posts.map((post: Post) => {
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
