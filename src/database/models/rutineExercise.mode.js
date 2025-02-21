import { DataTypes } from "sequelize";
import { sequelize } from "../sequelize.js";
import { Users } from "./user.model.js";
import { Rutines } from "./rutine.model.js";

export const RutineExercises = sequelize.define('rutine_exercises', {
    id:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    exercise_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    id_rutine: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Rutines,
            key: 'id'
        }
    }
    
},{
    timestamps: false
})