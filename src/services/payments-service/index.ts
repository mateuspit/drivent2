//import { Address, Enrollment } from '@prisma/client';
//import { request } from '@/utils/request';
import { notFoundError } from '@/errors';
import paymentRepository from '@/repositories/payments-repository';
//import enrollmentRepository, { CreateEnrollmentParams } from '@/repositories/enrollment-repository';
//import { exclude } from '@/utils/prisma-utils';
//import { TicketTypeId } from '@/protocols';

async function getPaymentTicketById(ticketId: number) {
    const result = await paymentRepository.getPaymentTicketById(ticketId);
    //console.log("test1:", result);
    console.log("ser:",result);
    if (result === null || !result) {
        throw notFoundError();
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