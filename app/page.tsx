import Button from '@/UI/button';
import Image from 'next/image';
import styles from './styles.module.scss';

export default function Home() {
	return (
		<main className={styles.home}>
			<div className={styles.home__element}>
				<div className={styles.home__element__image}>
					<Image
						src="https://res.cloudinary.com/dhpaxigzl/image/upload/v1695734135/i4zwkhh0zn9dqpuunytc.webp"
						alt="NextJS"
						fill={true}
					/>
				</div>
				<div className={styles.home__element__description}>
					<h2>This is description</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur purus nunc, id faucibus sapien
						auctor nec. Sed egestas consectetur orci, nec scelerisque ante tristique a. Vivamus at sapien vel eros
						fermentum rutrum. Morbi sollicitudin lorem lorem, eu aliquam leo semper vel. Sed vel dignissim diam,
						sit amet convallis mauris. Curabitur rutrum ac lacus vel eleifend. Nulla imperdiet neque non lorem
						blandit accumsan. Morbi lobortis odio nec nunc tristique tristique. Aenean tristique ipsum et eleifend
						rutrum. Maecenas dignissim at magna ut vestibulum. Nulla tellus lorem, dapibus eget ex eleifend,
						fermentum feugiat lectus. In ultrices suscipit lorem in tincidunt.
					</p>
					<div className={styles.home__element__description__button}>
						<Button>
							<a href="">Documentation</a>
						</Button>
					</div>
				</div>
			</div>
			<div className={styles.home__element}>
				<div className={styles.home__element__description}>
					<h2>This is description</h2>
				</div>
				<div className={styles.home__element__image}>
					<Image
						src="https://res.cloudinary.com/dhpaxigzl/image/upload/t_croped/l8pr6l37ptao3oj91jyi.jpg"
						alt="NextJS"
						fill={true}
					/>
				</div>
			</div>
			<div className={styles.home__element}>
				<div className={styles.home__element__image}>
					<Image
						src="https://res.cloudinary.com/dhpaxigzl/image/upload/v1695734135/i4zwkhh0zn9dqpuunytc.webp"
						alt="NextJS"
						fill={true}
					/>
				</div>
				<div className={styles.home__element__description}>
					<h2>This is description</h2>
				</div>
			</div>
			<div className={styles.home__element}>
				<div className={styles.home__element__description}>
					<h2>This is description</h2>
				</div>
				<div className={styles.home__element__image}>
					<Image
						src="https://res.cloudinary.com/dhpaxigzl/image/upload/t_croped/l8pr6l37ptao3oj91jyi.jpg"
						alt="NextJS"
						fill={true}
					/>
				</div>
			</div>
		</main>
	);
}
