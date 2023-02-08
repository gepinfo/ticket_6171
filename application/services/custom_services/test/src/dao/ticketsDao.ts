import * as mongoose from 'mongoose';
import ticketsModel from '../models/daomodels/tickets';
import { CustomLogger } from '../config/Logger'


export class ticketsDao {
    private tickets = ticketsModel;
    constructor() { }
    
    public async GpUpdate(ticketsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into ticketsDao.ts: GpUpdate');

    

    
    
    
    this.tickets.findOneAndUpdate({ _id: ticketsData._id }, ticketsData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from ticketsDao.ts: GpUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into ticketsDao.ts: GpGetAllValues');

    

    
    
    
    this.tickets.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from ticketsDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(ticketsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into ticketsDao.ts: GpCreate');

    let temp = new ticketsModel(ticketsData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from ticketsDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(ticketsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into ticketsDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.tickets.aggregate(([
                        { $match: { $and: [{ created_by: ticketsData.created_by }] } }
                    ])).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from ticketsDao.ts: GpGetNounCreatedBy');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}