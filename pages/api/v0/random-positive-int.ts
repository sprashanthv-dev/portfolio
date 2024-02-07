import { NextApiRequest, NextApiResponse } from 'next';

// @ts-ignore
export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ message: 'Hello World' });
};
