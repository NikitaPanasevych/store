/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
		prependData: '@import "./base.scss";',
	},
	images: {
		domains: ['localhost', 'res.cloudinary.com', 'res-console.cloudinary.com', 'lh3.googleusercontent.com'],
	},
};

module.exports = nextConfig;
