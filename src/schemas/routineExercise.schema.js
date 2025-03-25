import Joi from "joi";

export const routineExerciseSchema = Joi.object({
  exercise_id: Joi.alternatives().try(
      Joi.number().integer(),  // Permite un solo número
      Joi.array().items(Joi.number().integer()).min(1) // Permite un array de números
  ).required(),
  id_routine: Joi.number().integer().required()
});
