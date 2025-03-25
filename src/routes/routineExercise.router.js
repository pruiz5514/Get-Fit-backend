import express from 'express';
import tokenHandler from '../middleware/token.handler.js';
import validatorHandler from '../middleware/validator.handler.js';
import { routineExerciseSchema } from '../schemas/routineExercise.schema.js';
import routineExerciseService from '../services/routineExercise.service.js';

const router = express.Router()
const service = new routineExerciseService()

router.post('/',
    validatorHandler(routineExerciseSchema),
    tokenHandler,
    async (req, res, next) => {
        try{
            const body = req.body;
            await service.create(body)
            return res.status(201).json({message: 'Exercise succesfully added to the routine'})
        } catch(error){
            next(error)
        }
    }
)

export default router