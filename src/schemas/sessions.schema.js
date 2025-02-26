import Joi from "joi";

export const sessionsSchema = Joi.object({
    id_exercise: Joi.number().integer().required(),
  });