import { Router } from 'express';
import languageRouter from '../resources/languages/language.router';
import produtoRouter from '../resources/produto/produto.router';

const router = Router();

router.get('/', (req, res) => {
  res.send('Página principal do site');
});

router.get('/sobre', (req, res) => {
  res.send('Página sobre');
});

router.use('/produto', produtoRouter);
router.use('/language', languageRouter);

export default router;