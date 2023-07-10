import { Router } from 'express';
import { authenticateToken } from '@/middlewares';
import { getTicketsType, getTickets, newTicket } from '@/controllers';
//import { createEnrollmentSchema } from '@/schemas';

const ticketsRouter = Router();

ticketsRouter
    .all('/*', authenticateToken)
    .get('/types', getTicketsType)
    .get('/', getTickets)
    .post('/', newTicket)

export { ticketsRouter };
