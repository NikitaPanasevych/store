import { NextApiRequest, NextApiResponse } from 'next';

export interface ResponseData {
	message: string;
}

export default function handler(res: NextApiResponse) {
	res.status(200).json({ message: 'hello world!' });
}
