import { Router } from 'express';
import validate from '../../middleware/validate.middleware';
import * as UserController from './usuario.controller';
import usuarioSchema from './usuario.schema';

const usersRouter = Router();

usersRouter.get('/', UserController.listUsers);
usersRouter.post('/', validate(usuarioSchema.createSchema), UserController.createUser);
usersRouter.get('/:id', UserController.getUser);
usersRouter.put('/:id', validate(usuarioSchema.updateSchema), UserController.updateUser);
usersRouter.delete('/:id', UserController.deleteUser);

export default usersRouter;