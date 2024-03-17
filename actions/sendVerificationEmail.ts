'use server';

import sgMail from '../lib/mail';

export const sendVerificationEmail = async (email: string, token?: string) => {
	const confirmationUrl = `http://localhost:3000/auth/verify-email?token=${token}`;

	const msg = {
		to: { email }, // recipient's email address
		from: 'n.panasevych@gmail.com',
		subject: 'Confirm your email address',
		text: `Click the link to confirm your email: ${confirmationUrl}`,
	};

	try {
		await sgMail.send(msg);
		return { success: 'Email sent!' };
	} catch (error) {
		console.error(error);
		return { error: 'Email failed to send!' };
	}
};
