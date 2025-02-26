import { Series } from "../database/models/series.model.js";
import { Sessions } from "../database/models/session.model.js";
import BaseService from "./base.service.js";

class sessionsService extends BaseService{
    constructor(){
        super(Sessions);
    }

    async findOne(sessionId){
        const session = await this.model.findByPk(sessionId, {
            include: [
                {
                    model: Series,
                    as: 'series'
                }
            ]
        })

        if (!session) {
            throw { status: 404, message: "Session not found" };
        }

        return session
    }

}

export default sessionsService