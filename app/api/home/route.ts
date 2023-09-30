import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export async function GET(res: NextApiResponse) {
	let json_response = {
		status: 'success',
		result: 'Hello World',
	};
	return NextResponse.json(json_response);
}
