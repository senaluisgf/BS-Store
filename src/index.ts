import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import validateEnv from './utils/validate-env';

dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT || 3333;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world!');
});
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
