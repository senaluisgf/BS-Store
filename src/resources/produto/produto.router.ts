import { Router } from 'express';
import validate from '../../middleware/validate.middleware';
import produtoController from './produto.controller';
import schema from './produto.schema';

const router = Router();

router.get('/', produtoController.index);
router.post('/', validate(schema), produtoController.create);
router.get('/:id', produtoController.read);
router.put('/:id', validate(schema), produtoController.update);
router.delete('/:id', produtoController.remove);
export default router;