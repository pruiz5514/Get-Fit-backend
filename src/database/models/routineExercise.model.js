import { DataTypes } from "sequelize";
import { sequelize } from "../sequelize.js";
import { Routines } from "./routine.model.js";

export const RoutineExercises = sequelize.define('routine_exercises', {
    id:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    exercise_id: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    id_routine: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Routines,
            key: 'id'
        }
    }
    
},{
    timestamps: false
})