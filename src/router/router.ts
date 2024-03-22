import { Router } from 'express';
import produtoRouter from '../resources/produto/produto.router';

const router = Router();

router.get('/', (req, res) => {
  res.send('Página principal do site');
});

router.get('/sobre', (req, res) => {
  res.send('Página sobre');
});

router.use('/produto', produtoRouter);

export default router;