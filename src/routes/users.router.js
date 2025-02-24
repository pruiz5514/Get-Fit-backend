import express from 'express';
import UsersService from '../services/users.service.js';


const router = express.Router();
const service = new UsersService() 

router.get('/', async (req, res, next) => {
    try{
        const users = await service.find();
        return res.status(200).json(users)
    } catch(error){
        next(error)
    }
});

router.get('/:id', async(req, res, next) => {
    try{
        const { id } = req.params;
        const user = await service.findOne(id);
        if(!user){
            return res.status(404).json({message: 'User not found'})
        }
        return res.status(200).json(user)
    } catch(error){
        next(error)
    }
})

router.delete('/:id', async (req, res, next) => {
    try{
        const {id} = req.params;
        await service.delete(id);
        return res.status(200).json({message:'User deleted'})
    } catch(error){
        next(error)
    }
})

export default router