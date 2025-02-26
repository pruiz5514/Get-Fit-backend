import express from 'express';
import { sequelize } from './database/sequelize.js';
import { routerApi } from './routes/index.js';
import errorHandler from './middleware/error.handler.js';

import './database/models/user.model.js'
import './database/models/routine.model.js'
import './database/models/routineExercise.model.js'
import './database/models/session.model.js'
import './database/models/series.model.js'
import './database/models/index.js'


const app = express()
const PORT  = process.env.PORT || 3000;

app.use(express.json());
routerApi(app);

app.use(errorHandler);

const main = async () => {
    try{
        await sequelize.sync({alter: true});
        console.log('Database connected');
        app.listen(PORT, ()=>{
            console.log(`Server is running on http://localhost:${PORT}`)
        })
    } catch(error){
        console.log(error)
    }
}

main();

