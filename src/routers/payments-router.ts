import { Router } from 'express';
import { authenticateToken, validateQuery } from '@/middlewares';
import { getPaymentTicketById } from '@/controllers';
import { ticketIdSchema } from '@/schemas';

const paymentsRouter = Router();

paymentsRouter
    .all('/*', authenticateToken)
    .get('/', validateQuery(ticketIdSchema), getPaymentTicketById)
//.get('/', getTickets)
//.post('/', newTicket)

export { paymentsRouter };
