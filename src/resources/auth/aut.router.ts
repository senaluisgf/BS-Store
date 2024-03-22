import { Router } from 'express';
import validate from '../../middleware/validate.middleware';
import authController from './auth.controller';
import authSchema from './auth.schema';

const authRouter = Router();

authRouter.post('/signup', validate(authSchema.signupSchema), authController.signup);
authRouter.post('/login', validate(authSchema.loginSchema), authController.login);
authRouter.post('/logout', authController.logout);

export default authRouter