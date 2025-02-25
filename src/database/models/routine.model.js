import { DataTypes } from "sequelize";
import { sequelize } from "../sequelize.js";
import { Users } from "./user.model.js";

export const Routines = sequelize.define('routines', {
    id:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Users,
            key: 'id'
        }
    }
    
},{
    timestamps: false
})