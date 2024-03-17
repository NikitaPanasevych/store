// sendgrid.js

import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.MAIL_API_KEY);

export default sgMail;
