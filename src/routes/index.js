import express from 'express';
import userRouter from './users.router.js'
import authRouter from './auth.router.js'


export function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/users', userRouter);
    router.use('/auth', authRouter)
}