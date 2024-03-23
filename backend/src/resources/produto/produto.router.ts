import { Router } from 'express';
import isAdmin from '../../middleware/isAdmin.middleware';
import validate from '../../middleware/validate.middleware';
import produtoController from './produto.controller';
import schema from './produto.schema';

const router = Router();

router.get('/', produtoController.index);
router.post('/', isAdmin, validate(schema), produtoController.create);
router.get('/:id', produtoController.read);
router.put('/:id', isAdmin, validate(schema), produtoController.update);
router.delete('/:id', isAdmin, produtoController.remove);
export default router;