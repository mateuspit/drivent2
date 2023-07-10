import { Router } from 'express';
import { authenticateToken, validateQuery } from '@/middlewares';
import { getPaymentTicketById } from '@/controllers';
import { ticketIdSchema } from '@/schemas';
//
import { makePayment } from '@/controllers';
import { validateBody } from '@/middlewares';
import { paymentSchema } from '@/schemas';
//

const paymentsRouter = Router();

paymentsRouter
    .all('/*', authenticateToken)
    .get('/', validateQuery(ticketIdSchema), getPaymentTicketById)
    //.get('/', getTickets)
    //
    .post('/process', validateBody(paymentSchema), makePayment)
//

export { paymentsRouter };
