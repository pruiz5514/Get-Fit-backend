import Joi from "joi";

export const registerSchema = Joi.object({
    email: Joi.string().email().required(),
    username: Joi.string().min(3).required(),
    password: Joi.string().min(3).required(),
  });

export const loginSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
})