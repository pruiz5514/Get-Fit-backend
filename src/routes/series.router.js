import express from 'express';
import tokenHandler from '../middleware/token.handler.js';
import validatorHandler from '../middleware/validator.handler.js';
import seriesService from '../services/series.service.js';
import { seriesSchema } from '../schemas/series.schema.js';

const router = express.Router();
const service = new seriesService()

router.post('/', 
    tokenHandler,
    validatorHandler(seriesSchema),
    async (req, res, next) => {
        try{
            const body = req.body;
            const newSerie = await service.create(body);
    
            return res.status(201).json({message:'Serie succesfully created', newSerie: newSerie})
        } catch(error){
            next(error)
        }
        
    }
)



export default router