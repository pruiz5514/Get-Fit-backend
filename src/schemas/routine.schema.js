import Joi from "joi";

export const routineSchema = Joi.object({
    name: Joi.string().min(3).required(),
  });