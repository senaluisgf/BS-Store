import { Router } from 'express';
import isAdmin from '../../middleware/isAdmin.middleware';
import { uploadImg } from '../../middleware/upload.middleware';
import validate from '../../middleware/validate.middleware';
import produtoController from './produto.controller';
import schema from './produto.schema';

const router = Router();

router.get('/', produtoController.index);
router.post('/', isAdmin, uploadImg.single('imagem'), produtoController.create);
router.get('/:id', produtoController.read);
router.put('/:id', isAdmin, validate(schema), produtoController.update);
router.delete('/:id', isAdmin, produtoController.remove);
export default router;