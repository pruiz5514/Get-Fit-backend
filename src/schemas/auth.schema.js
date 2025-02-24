import Joi from "joi";

export const userSchema = Joi.object({
    email: Joi.string().email().required(),
    username: Joi.string().min(3),
    password: Joi.string().min(3).required(),
  });