import Joi from "joi";

export const progressSchema = Joi.object({
    id_user: Joi.number().integer().required(),
    id_exercise: Joi.number().integer().required(),
    repeats: Joi.number().integer().required(),
    weight: Joi.number().integer().required(),
    date: Joi.date().max("now").required()
  });