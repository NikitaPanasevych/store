'use server';
import { getAll } from '@/lib/db-queries/getAll';
import { getAllCategories } from '@/lib/db-queries/getAllCategories';
import { getCountries } from '@/lib/db-queries/getCountries';
import { getGrapes } from '@/lib/db-queries/getGrapes';
import { getTypes } from '@/lib/db-queries/getTypes';

const getCategory = async (type: string) => {
	switch (type) {
		case 'type':
			return await getTypes();
		case 'countries':
			return await getCountries();
		case 'grapes':
			return await getGrapes();
		case 'all':
			return await getAllCategories();
		default:
			return await getAll();
	}
};

export default getCategory;
