import { Response, Request } from 'express';
import { AuthenticatedRequest } from '@/middlewares';
import httpStatus from 'http-status';
//import { AuthenticatedRequest } from '@/middlewares';
import paymentsService from '@/services/payments-service';
//import enrollmentsService from '@/services/enrollments-service';
import { Ticket } from '@/protocols';
//
//

//getPaymentTicketById makePayment

export async function getPaymentTicketById(req: AuthenticatedRequest, res: Response) {
    //const ticketId = parseInt(req.query.ticketId as string, 10);
    //
    const userId = req.userId;
    //
    const ticketId: Ticket['id'] = parseInt(req.query.ticketId as string, 10);
    try {
        const result = await paymentsService.getPaymentTicketById(ticketId, userId);
        //console.log("test2:", result);
        return res.status(httpStatus.OK).send(result);
    } catch (error) {
        if (error.name === 'NotFoundError') {
            return res.send(httpStatus.NOT_FOUND);
        }
        if (error.message === 'No_Tickets') {
            return res.send(httpStatus.NOT_FOUND);
        }
        //return res.send(httpStatus.UNAUTHORIZED);
    }
}

//
export async function makePayment(req: AuthenticatedRequest, res: Response) {
    const paymentData = req.body;
    try {
        const result = await paymentsService.makePayment(paymentData);
        //console.log("test2:", result);
        return res.status(httpStatus.OK).send(result);
    } catch (error) {
        if (error.name === 'NotFoundError') {
            return res.send(httpStatus.NOT_FOUND);
        }
        return res.send(httpStatus.UNAUTHORIZED);
    }
}
//