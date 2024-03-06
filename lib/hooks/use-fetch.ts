import { useState, useEffect } from 'react';

// Define your custom hook
function useFetch(slug: string) {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`http://localhost:3000/api/shop/${slug}`, { cache: 'no-store' });
				if (!response.ok) {
					throw new Error('Failed to fetch data');
				}
				const result = await response.json();
				setData(result.data);
				setLoading(false);
			} catch (error) {
				//@ts-ignore
				setError(error);
				setLoading(false);
			}
		};

		fetchData();

		// Clean up function
		return () => {
			// Any cleanup code (e.g., cancelling the request) can go here
		};
	}, [slug]);

	return { data, loading, error };
}

export default useFetch;
