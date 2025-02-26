import Joi from "joi";

export const seriesSchema = Joi.object({
    id_session: Joi.number().integer().required(),
    repeats: Joi.number().integer().required(),
    weight: Joi.number().integer().required(),
  });