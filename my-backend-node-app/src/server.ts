import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import apiRoutes from './routes/api';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api', apiRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the Express API!');
});
app.get('/api/jokes', (req, res) => {
    res.json({ joke: 'Chuck Norris can divide by zero.' });
  });
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
