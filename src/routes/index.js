import express from 'express';
import userRouter from './users.router.js'
import authRouter from './auth.router.js'
import routineRouter from './routines.router.js'
import routineExerciseRouter from './routineExercise.router.js'
import progressRouter from './progress.router.js'


export function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/users', userRouter);
    router.use('/auth', authRouter)
    router.use('/routines', routineRouter)
    router.use('/routine_exercise', routineExerciseRouter)
    router.use('/progress', progressRouter)
}