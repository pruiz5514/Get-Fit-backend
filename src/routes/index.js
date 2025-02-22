import express from 'express';
import userRouter from './users.router.js'


export function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/users', userRouter)
}