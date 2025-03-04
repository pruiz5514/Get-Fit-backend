
import { Routines } from "../database/models/routine.model.js";
import { RoutineExercises } from "../database/models/routineExercise.model.js";
import BaseService from "./base.service.js";

class routinesService extends BaseService{
    constructor(){
        super(Routines)
    }

    async findAll(userId){
        const routinesByUser = await this.model.findAll({where: {id_user: userId}, attributes: { exclude: ["id_user"] }});
        if(!routinesByUser){
            throw {status: 404, message: 'No routines found'}
        }
        return routinesByUser
    }

    async findOne(routineId){
        const routine = await this.model.findByPk(routineId, {
            include: [
                {
                    model: RoutineExercises,
                    as: 'routine_exercises'
                }
            ]
        })

        if (!routine) {
            throw { status: 404, message: "Routine not found" };
        }

        return routine
    }

    async create(data){
        const existingRoutine = await this.model.findOne({where: {id_user: data.id_user, name: data.name}})
        if(existingRoutine) {
            throw {status: 400, message: 'There is already a routine registered under that name '}
        }

        return super.create(data);
    }
}

export default routinesService