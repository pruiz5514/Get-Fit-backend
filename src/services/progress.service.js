
import { Series } from "../database/models/series.model";
import BaseService from "./base.service";

class progressService extends BaseService{
    constructor(){
        super(Series);
    }
}

export default progressService