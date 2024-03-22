import Joi from "joi";
import { TiposUsuarios } from "../tipoUsuario/tipoUsuario.constants";

const createSchema = Joi.object({
  nome: Joi.string().min(3).max(100).required(),
  email: Joi.string().email().required(),
  senha: Joi.string().min(4).required(),
  tipoUsuarioId: Joi.string().uuid().valid(TiposUsuarios.ADMIN, TiposUsuarios.CLIENT).required(),
});

const updateSchema = Joi.object({
  nome: Joi.string().min(3).max(100).required(),
  email: Joi.string().email().required(),
});

export default { createSchema, updateSchema };