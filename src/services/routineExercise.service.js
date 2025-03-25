import { Op } from "sequelize";
import { RoutineExercises } from "../database/models/routineExercise.model.js";
import BaseService from "./base.service.js";

class routineExerciseService extends BaseService{
    constructor(){
        super(RoutineExercises)
    }

    async create(data) {
        if (Array.isArray(data.exercise_id)) {
            const formattedData = data.exercise_id.map(id => ({
                id_routine: data.id_routine,
                exercise_id: String(id) 
            }));
    
            return await this._processArrayData(formattedData);
        } 
        else {
            data.exercise_id = String(data.exercise_id); 
            return await this._processSingleData(data);
        }
    }
    
    async _processArrayData(dataArray) {
    
        const existingExercises = await this.model.findAll({
            where: {
                [Op.or]: dataArray
            },
            attributes: ["id_routine", "exercise_id"]
        });
    
        const newExercises = dataArray.filter(exercise =>
            !existingExercises.some(existing =>
                existing.id_routine === exercise.id_routine &&
                existing.exercise_id === exercise.exercise_id
            )
        );
    
        if (newExercises.length === 0) {
            throw { status: 400, message: "All exercises are already registered in the routine" };
        }
    
        return await this.model.bulkCreate(newExercises);
    }
    
    async _processSingleData(data) {
        const existingExercise = await this.model.findOne({
            where: {
                id_routine: data.id_routine,
                exercise_id: data.exercise_id
            }
        });
    
        if (existingExercise) {
            throw { status: 400, message: 'Exercise already registered in the routine' };
        }
    
        return await super.create(data);
    }
}

export default routineExerciseService