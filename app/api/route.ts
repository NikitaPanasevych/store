import { NextApiRequest, NextApiResponse } from 'next';

export default function helloWorldHandler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'GET') {
		res.status(200).json({ text: 'Hello' });
	}
}
