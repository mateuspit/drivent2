import { Response, Request } from 'express';
import { AuthenticatedRequest } from '@/middlewares';
import httpStatus from 'http-status';
//import { AuthenticatedRequest } from '@/middlewares';
import ticketsService from '@/services/tickets-service';
//import enrollmentsService from '@/services/enrollments-service';
import { TicketType } from '@/protocols';

export async function getTicketsType(req: AuthenticatedRequest, res: Response) {
    try {
        const result = await ticketsService.getTicketsType();
        //console.log("test2:", result);
        return res.status(httpStatus.OK).send(result);
    } catch (error) {
        return res.sendStatus(httpStatus.NO_CONTENT);
    }
}

export async function getTickets(req: AuthenticatedRequest, res: Response) {
    try {
        const result = await ticketsService.getTickets();
        //console.log("test2:", result);
        return res.status(httpStatus.OK).send(result);
    } catch (error) {
        return res.sendStatus(httpStatus.NOT_FOUND);
    }
}

export async function newTicket(req: AuthenticatedRequest, res: Response) {

    //const ticketTypeId: TicketTypeId = req.body as TicketTypeId;
    const { ticketTypeId } = req.body as { ticketTypeId: number };

    try {
        const result = await ticketsService.postTicket(ticketTypeId);
        console.log("post2:", result);
        return res.status(httpStatus.CREATED).send(result);
        //return res.sendStatus(httpStatus.CREATED);
    } catch (error) {
        return res.sendStatus(httpStatus.NOT_FOUND);
    }
}