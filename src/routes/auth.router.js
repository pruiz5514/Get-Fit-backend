import express from 'express';
import UsersService from '../services/users.service.js';
import validatorHandler from '../middleware/validator.handler.js';
import { loginSchema, registerSchema } from '../schemas/auth.schema.js';


const router = express.Router();
const service = new UsersService()

router.post('/register',
    validatorHandler(registerSchema),
    async (req, res, next) => {
        try{
            const body = req.body;
            const newUser = await service.create(body)
            const { password,updatedAt,createdAt, ...userWithoutPassword } = newUser.dataValues;
            return res.status(201).json({
                message:'`User succesfully created`',
                user: userWithoutPassword
            })
        } catch(error){
            next(error)
        }
})

router.post('/login',
    validatorHandler(loginSchema),
    async (req, res, next) => {
        try{
            const body = req.body;
            const {user, token} = await service.login(body)
            return res.status(201).json({
                message:'Login succesful',
                user: {
                    id: user.id,
                    email: user.email,
                    username: user.username
                },
                token: token
            })
        } catch(error){
            next(error)
        }
})

export default router