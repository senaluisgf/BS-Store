import Joi from "joi";

const schema = Joi.object({
  rotulo: Joi.string().min(3).max(10).required(),
});

export default schema;