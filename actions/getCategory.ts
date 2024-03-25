'use server';
import { getAll } from '@/lib/db-queries/getAll';
import { getAllCategories } from '@/lib/db-queries/getAllCategories';
import { getCountries } from '@/lib/db-queries/getCountries';
import { getGrapes } from '@/lib/db-queries/getGrapes';
import { getTypes } from '@/lib/db-queries/getTypes';

const getCategory = async (type?: string) => {
	switch (type) {
		case 'categoryName':
			return await getTypes();
		case 'countryName':
			return await getCountries();
		case 'grapeName':
			return await getGrapes();
		case 'all':
			return await getAllCategories();
		default:
			return await getAll();
	}
};

export default getCategory;
