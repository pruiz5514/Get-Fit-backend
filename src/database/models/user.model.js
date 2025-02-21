import { DataTypes } from "sequelize";
import { sequelize } from "../sequelize.js";

export const Users = sequelize.define('users', {
    id:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING,
        validate:{
            isEmail: true
        },
        unique: true
    },
    username: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING        
    }
})