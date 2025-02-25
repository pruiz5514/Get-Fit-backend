import { DataTypes } from "sequelize";
import { sequelize } from "../sequelize.js";
import { Users } from "./user.model.js";

export const Sessions = sequelize.define('sessions', {
    id:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    id_user: {
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
    }
},{
    timestamps: false,
    // tableName:'progress'
})