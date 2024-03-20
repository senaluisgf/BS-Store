import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import morgan from 'morgan';
import Log from './middleware/log.middleware';
import validateEnv from './utils/validate-env';

dotenv.config();
validateEnv();
const PORT = process.env.PORT || 3333;

const app = express();

app.use(morgan('short'));
app.use(Log('completo'));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world!');
});
app.get('/about', (req: Request, res: Response) => {
  res.send('About Page');
});

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
