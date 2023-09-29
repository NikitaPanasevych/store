import Link from 'next/link';
import styles from './styles.module.scss';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__logo}>
				<div>LOGO</div>
			</div>
			<div className={styles.footer__main}>
				<ul className={styles.footer__main__list}>
					<li className={styles.footer__main__list__element}>
						<Link href="">Our wines</Link>
					</li>
					<li className={styles.footer__main__list__element}>
						<Link href="">Red</Link>
					</li>
					<li className={styles.footer__main__list__element}>
						<Link href="">White</Link>
					</li>
					<li className={styles.footer__main__list__element}>
						<Link href="">Rose</Link>
					</li>
				</ul>
				<ul className={styles.footer__main__list}>
					<li className={styles.footer__main__list__element}>
						<Link href="">About Us</Link>
					</li>
					<li className={styles.footer__main__list__element}>
						<Link href="">Customer Service</Link>
					</li>
					<li className={styles.footer__main__list__element}>
						<Link href="">Terms & Conditions</Link>
					</li>
					<li className={styles.footer__main__list__element}>
						<Link href="">Privacy Policy</Link>
					</li>
				</ul>
				<ul className={styles.footer__main__list}>
					<li className={styles.footer__main__list__element}>
						<Link href="">Contact Us</Link>
					</li>
					<li className={styles.footer__main__list__element}>
						<Link href="">Careers</Link>
					</li>
					<li className={styles.footer__main__list__element}>
						<Link href="">Gift Cards</Link>
					</li>
					<li className={styles.footer__main__list__element}>
						<Link href="">Help Center</Link>
					</li>
				</ul>
			</div>
			<div className={styles.footer__details}>
				<div className={styles.footer__details__policy}>
					<span>©Wine Store All rights reserved.</span>
					<span>Privacy Policy</span>
					<span>Cookie Policy</span>
					<span>Sitemap</span>
				</div>
				<div className={styles.footer__details__payment}>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png"
						alt="Mastercard"
					/>
					<img src="https://logos-world.net/wp-content/uploads/2020/06/Visa-Logo-2006.png" alt="Visa" />
					<img src="https://logos-world.net/wp-content/uploads/2020/07/PayPal-Logo.png" alt="Paypal" />
					<img src="https://cdn-icons-png.flaticon.com/512/5968/5968601.png" alt="Apple Pay" />
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/2560px-Google_Pay_Logo.svg.png"
						alt="Google Pay"
					/>
				</div>
			</div>
		</footer>
	);
};
