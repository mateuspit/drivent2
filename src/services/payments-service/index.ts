//import { Address, Enrollment } from '@prisma/client';
//import { request } from '@/utils/request';
import { getTickets } from '@/controllers';
import { notFoundError } from '@/errors';
import paymentRepository from '@/repositories/payments-repository';
import ticketsService from '../tickets-service';
//import enrollmentRepository, { CreateEnrollmentParams } from '@/repositories/enrollment-repository';
//import { exclude } from '@/utils/prisma-utils';
//import { TicketTypeId } from '@/protocols';

async function getPaymentTicketById(ticketId: number, userId: any) {
    const result = await paymentRepository.getPaymentTicketById(ticketId);
    //console.log("test1:", result);
    console.log("ser:",result);
    if (result === null || !result) {
        throw notFoundError();
    }
    const hasTickets = await ticketsService.getTickets(userId);

    if(!hasTickets){
        throw Error("No_Tickets")
    }
    return result;
}

//
async function makePayment(paymentData: any) {
    const result = await paymentRepository.makePayment(paymentData);
    //console.log("test1:", result);
    console.log("ser:",result);
    if (result === null || !result) {
        throw notFoundError();
    }
    return result;
}
//

const paymentsService = {
    getPaymentTicketById,
    //
    makePayment
    //
};

export default paymentsService;