import { Router } from 'express';
import validate from '../../middleware/validate.middleware';
import tipoUsuarioController from './tipoUsuario.controller';
import schema from './tipoUsuario.schema';

const router = Router();

router.get('/', tipoUsuarioController.index);
router.post('/', validate(schema), tipoUsuarioController.create);
router.get('/:id', tipoUsuarioController.read);
router.delete('/:id', tipoUsuarioController.remove);

export default router;