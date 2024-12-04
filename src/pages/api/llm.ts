import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const response = await fetch('http://localhost:3001/api/llm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req.body),
      });
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error('Error fetching data from LLM:', error);
      res.status(500).json({ error: 'Failed to fetch data from LLM' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
