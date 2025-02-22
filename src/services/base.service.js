class BaseService {
    constructor(model){
        this.model = model
    }

    async find(){
        return await this.model.findAll();
    };

    async findOne(id){
        return await this.model.findByPk(id);
    };

    async create(data){
        return await this.model.create(data)
    }

    async update(id, data){
        const record = await this.findOne(id);
        if(!record){
            throw new Error('Record not found')
        }
        return await record.update(data)
    }

    async delete(id){
        const record = await this.findOne(id);
        if(!record){
            throw new Error('Record not found')
        }
        await record.destroy()
        return {message: 'Record deleted succesfully'}
    }


}

export default BaseService