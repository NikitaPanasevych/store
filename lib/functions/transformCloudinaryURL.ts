export const transformCloudinaryUrl = (inputUrl: string, type: string): string => {
	try {
		const url = new URL(inputUrl);
		const pathSegments = url.pathname.split('/');
		const wineIndex = pathSegments.findIndex((segment) => segment === type);
		if (wineIndex !== -1) {
			const transformedPath = pathSegments.slice(wineIndex).join('/');
			const resultWithoutExtension = transformedPath.replace(/\.\w+$/, '');
			return resultWithoutExtension;
		} else {
			throw new Error('Invalid URL format: "wine" segment not found.');
		}
	} catch (error: any) {
		console.error('Error transforming URL:', error.message);
		return '';
	}
};
