import { Router } from 'express';
import validate from '../../middleware/validate.middleware';
import languageController from './language.controller';
import languageSchema from './language.schema';

const router = Router();

router.get('/change', validate(languageSchema), languageController.changeLanguage);

export default router;