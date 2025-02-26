import express from 'express';
import sessionsService from '../services/sessions.service.js';
import tokenHandler from '../middleware/token.handler.js';
import validatorHandler from '../middleware/validator.handler.js';
import { sessionsSchema } from '../schemas/sessions.schema.js';


const router = express.Router()
const service = new sessionsService()

router.post('/',
    tokenHandler,
    validatorHandler(sessionsSchema),
    async (req, res, next) =>{
        try{
            const body = req.body;
            const userId = req.user.id;
            const now = new Date();
            const localDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
            const newSession = {
                id_user: userId,
                id_exercise: body.id_exercise,
                date: localDate
            }
            await service.create(newSession)
            return res.status(201).json({message: 'Session uccesfully created', session: newSession})
        } catch(error){
            next(error)
        }
    }
)

router.get('/:id',
    tokenHandler,
    async (req, res, next) => {
        try{
            const {id} = req.params
            const session = await service.findOne(id);
            return res.status(200).json(session)
        } catch(error){
            next(error)
        }
    }

)

export default router