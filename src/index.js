import express from 'express';
import { sequelize } from './database/sequelize.js';

import './database/models/user.model.js'
import './database/models/rutine.model.js'
import './database/models/rutineExercise.mode.js'
import './database/models/progress.model.js'
import './database/models/index.js'

const app = express()
const PORT  = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json({message: 'oeee'})
})


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

main()