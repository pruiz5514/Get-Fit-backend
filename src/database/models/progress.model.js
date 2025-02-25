import { DataTypes } from "sequelize";
import { sequelize } from "../sequelize.js";
import { Users } from "./user.model.js";

export const Progress = sequelize.define('progress', {
    id:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    id_routine: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Users,
            key: 'id'
        }
    },
    id_exercise: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    date: {
        allowNull: false,
        type: DataTypes.DATE        
    },
    repeats:{
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    weight:{
        allowNull: false,
        type: DataTypes.INTEGER,
    }
},{
    timestamps: false,
    tableName:'progress'
})