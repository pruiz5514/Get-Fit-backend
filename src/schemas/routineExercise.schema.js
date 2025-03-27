import Joi from "joi";

export const routineExerciseSchema = Joi.object({
  exercise_id: Joi.alternatives().try(
      Joi.string(),  // Permite un solo número
      Joi.array().items(Joi.string()).min(1) // Permite un array de números
  ).required(),
  id_routine: Joi.number().integer().required()
});
