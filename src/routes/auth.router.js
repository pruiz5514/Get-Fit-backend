import express from 'express';
import UsersService from '../services/users.service.js';
import validatorHandler from '../middleware/validator.handler.js';
import { userSchema } from '../schemas/auth.schema.js';


const router = express.Router();
const service = new UsersService()

router.post('/register',
    validatorHandler(userSchema),
    async (req, res, next) => {
        try{
            const body = req.body;
            const newUser = await service.create(body)
            return res.status(201).json({
                message:'User succesfully created',
            })
        } catch(error){
            next(error)
        }
})

export default router