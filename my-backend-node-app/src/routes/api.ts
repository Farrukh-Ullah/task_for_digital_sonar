import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/data', (req: Request, res: Response) => {
  const data = { message: 'Hello from the API!' };
  res.json(data);
});

export default router;
