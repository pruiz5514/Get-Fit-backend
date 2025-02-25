import { RoutineExercises } from "../database/models/routineExercise.model.js";
import BaseService from "./base.service.js";

class routineExerciseService extends BaseService{
    constructor(){
        super(RoutineExercises)
    }

    async create(data){
        const existingExerciseInRoutine = await this.model.findOne({
            where: {
                id_routine: data.id_routine,
                exercise_id: data.exercise_id
            }
        })

        if(existingExerciseInRoutine){
            throw {status: 400, message: 'Exercise already registered in the routine'}
        }

        return super.create(data)
    }
}

export default routineExerciseService