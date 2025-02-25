import express from 'express';
import routinesService from '../services/routines.service.js';
import tokenHandler from '../middleware/token.handler.js';
import validatorHandler from '../middleware/validator.handler.js';
import { routineSchema } from '../schemas/routine.schema.js';


const router = express.Router()
const service  = new routinesService();

router.get('/',
    tokenHandler,
    async (req, res, next) => {
        try{
            const userId = req.user.id
            const routines = await service.findAll(userId)
            return res.status(200).json(routines)
        } catch(error){
            next(error)
        }
});

router.post('/',
    validatorHandler(routineSchema),
    tokenHandler,
    async (req, res, next) => {
        try{
            const body = req.body
            const userId = req.user.id;
            const newRoutine = {
                name: body.name,
                id_user: userId
            }
            await service.create(newRoutine);
            return res.status(201).json({message: 'Routine succesfully created'})
        } catch(error){
            next()
        }
    }
)


export default router