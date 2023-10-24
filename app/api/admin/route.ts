import { getAll } from '@/lib/queries/getAll';
import { getAllCategories } from '@/lib/queries/getAllCategories';
import { getCountries } from '@/lib/queries/getCountries';
import { getGrapes } from '@/lib/queries/getGrapes';
import { getTypes } from '@/lib/queries/getTypes';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
	const param = request.nextUrl.searchParams.get('type');

	const getResponse = (data: any) => {
		return NextResponse.json({
			status: 'success',
			data,
		});
	};

	if (param === 'type') {
		const data = await getTypes();
		return getResponse(data);
	} else if (param === 'countries') {
		const data = await getCountries();
		return getResponse(data);
	} else if (param === 'grapes') {
		const data = await getGrapes();
		return getResponse(data);
	} else if (param === 'all') {
		const data = await getAllCategories();
		return getResponse(data);
	} else {
		const data = await getAll();
		return getResponse(data);
	}
}
