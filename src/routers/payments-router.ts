import { Router } from 'express';
import { authenticateToken } from '@/middlewares';
import { getPaymentTicketById } from '@/controllers';
//import { createEnrollmentSchema } from '@/schemas';

const paymentsRouter = Router();

paymentsRouter
    .all('/*', authenticateToken)
    .get('/', getPaymentTicketById)
    //.get('/', getTickets)
    //.post('/', newTicket)

export { paymentsRouter };
