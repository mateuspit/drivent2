import { Router } from 'express';
import { authenticateToken, validateBody } from '@/middlewares';
import { getTicketsType, getTickets, newTicket } from '@/controllers';
import { newTicketSchema } from '@/schemas';

const ticketsRouter = Router();

ticketsRouter
    .all('/*', authenticateToken)
    .get('/types', getTicketsType)
    .get('/', getTickets)
    .post('/', validateBody(newTicketSchema), newTicket)

export { ticketsRouter };
