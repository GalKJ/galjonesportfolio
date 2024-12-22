import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const hardcodedResponseTest = true; // Set to false to forward requests
const apiKey = process.env.OPEN_WEBUI_API_KEY;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    console.log('Received POST request at /api/llm');
    try {
      if (hardcodedResponseTest) {
        const hardcodedResponse = { response: 'This is a hardcoded response' };
        res.json(hardcodedResponse);
      } else {
        console.log('Request to LLM:', req.body);
        const response = await axios.post(
          'http://localhost:5000/api/chat/completions',
          req.body,
          {
            headers: {
              Authorization: `Bearer ${apiKey}`,
              'Content-Type': 'application/json',
            },
          }
        );
        res.json(response.data);
      }
    } catch (error) {
      console.error('Error fetching data from LLM:', error);
      if (axios.isAxiosError(error)) {
        res.status(500).send(error.response?.data || error.message);
      } else if (error instanceof Error) {
        res.status(500).send(error.message);
      } else {
        res.status(500).send('An unknown error occurred');
      }
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
