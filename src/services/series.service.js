import { Series } from "../database/models/series.model.js";
import BaseService from "./base.service.js";

class seriesService extends BaseService{
    constructor(){
        super(Series)
    }

}

export default seriesService