import { Request, Response } from 'express';
import {ticketsDao} from '../dao/ticketsDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let tickets = new ticketsDao();

export class ticketsService {
    
    constructor() { }
    
    public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketsService.ts: GpUpdate')
     let  ticketsData = req.body;
     tickets.GpUpdate(ticketsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketsService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketsService.ts: GpGetAllValues')
     
     tickets.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketsService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketsService.ts: GpCreate')
     let  ticketsData = req.body;
     tickets.GpCreate(ticketsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketsService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketsService.ts: GpGetNounCreatedBy')
     let  ticketsData = { created_by: req.query.createdby };
     tickets.GpGetNounCreatedBy(ticketsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketsService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}