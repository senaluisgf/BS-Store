import Joi from "joi";

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  senha: Joi.string().min(3).required(),
})
const signupSchema = Joi.object({
  nome: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  senha: Joi.string().min(3).required(),
})

export default { loginSchema, signupSchema }