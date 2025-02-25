import { ValidationError } from "sequelize";
import { Users } from "../database/models/user.model.js";
import BaseService from "./base.service.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

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

    async login(data){
        const user = await this.model.findOne({where: {email: data.email}});
        if(!user){
             throw { status: 401, message: 'Invalid credentials' };
        }

        const validPassword = await bcrypt.compare(data.password, user.password)
        if(!validPassword){
             throw { status: 401, message: 'Invalid credentials' };
        }

        const token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
            id: user.id, 
        }, process.env.JWT_KEY)

        return {user, token}
    }

}

export default UsersService