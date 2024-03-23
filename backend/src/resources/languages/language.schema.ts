import Joi from "joi";

const languageSchema = Joi.object({
  lang: Joi.valid('pt-BR', 'en-US')
})

export default languageSchema;