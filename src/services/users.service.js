import { ValidationError } from "sequelize";
import { Users } from "../database/models/user.model.js";
import BaseService from "./base.service.js";
import bcrypt from 'bcrypt'

class UsersService extends BaseService{
    constructor(){
        super(Users)
    }
    
    async create(data){
        const existingEmail = await this.model.findOne({where: {email: data.email}});
        if(existingEmail){
            throw new ValidationError('Email already resgistered')
        }

        const existingUsername = await this.model.findOne({where: {username: data.username}});
        if(existingUsername){
            throw new ValidationError('Username already resgistered')
        }

        const newUser = {
            email: data.email,
            username: data.username,
            password: await bcrypt.hash(data.password, 10)
        }
        return super.create(newUser);
    }

}

export default UsersService