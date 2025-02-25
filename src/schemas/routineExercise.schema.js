import Joi from "joi";

export const routineExerciseSchema = Joi.object({
    exercise_id: Joi.number().integer().required(),
    id_routine: Joi.number().integer().required()
  });