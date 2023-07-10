import { Response, Request } from 'express';
import { AuthenticatedRequest } from '@/middlewares';
import httpStatus from 'http-status';
//import { AuthenticatedRequest } from '@/middlewares';
import paymentsService from '@/services/payments-service';
//import enrollmentsService from '@/services/enrollments-service';
import { Ticket } from '@/protocols';

//getPaymentTicketById

export async function getPaymentTicketById(req: AuthenticatedRequest, res: Response) {
    //const ticketId = parseInt(req.query.ticketId as string, 10);
    const ticketId: Ticket['id'] = parseInt(req.query.ticketId as string, 10);
    try {
        const result = await paymentsService.getPaymentTicketById(ticketId);
        //console.log("test2:", result);
        return res.status(httpStatus.OK).send(result);
    } catch (error) {
        return res.sendStatus(httpStatus.NO_CONTENT);
    }
}

//export async function getTickets(req: AuthenticatedRequest, res: Response) {
//    try {
//        const result = await ticketsService.getTickets();
//        //console.log("test2:", result);
//        return res.status(httpStatus.OK).send(result);
//    } catch (error) {
//        return res.sendStatus(httpStatus.NOT_FOUND);
//    }
//}

//export async function newTicket(req: AuthenticatedRequest, res: Response) {

//    //const ticketTypeId: TicketTypeId = req.body as TicketTypeId;
//    const { ticketTypeId } = req.body as { ticketTypeId: number };

//    try {
//        const result = await ticketsService.postTicket(ticketTypeId);
//        console.log("post2:", result);
//        return res.status(httpStatus.CREATED).send(result);
//        //return res.sendStatus(httpStatus.CREATED);
//    } catch (error) {
//        return res.sendStatus(httpStatus.NOT_FOUND);
//    }
//}