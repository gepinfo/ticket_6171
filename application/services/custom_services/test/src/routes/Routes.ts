import { Request, Response, NextFunction } from "express";
import { ticketsController } from '../controller/ticketsController';


export class Routes {
    private tickets: ticketsController = new ticketsController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/tickets').put(this.tickets.GpUpdate);
app.route('/tickets').get(this.tickets.GpGetAllValues);
app.route('/tickets').post(this.tickets.GpCreate);
app.route('/tickets/userid/created_by').get(this.tickets.GpGetNounCreatedBy);
     }

}