import { DataTypes } from "sequelize";
import { sequelize } from "../sequelize.js";
import { Sessions } from "./session.model.js";

export const Series = sequelize.define('series', {
    id:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    id_session: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Sessions,
            key: 'id'
        }
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
    tableName:'series'
})