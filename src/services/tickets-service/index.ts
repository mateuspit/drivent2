//import { Address, Enrollment } from '@prisma/client';
//import { request } from '@/utils/request';
import { notFoundError } from '@/errors';
import ticketRepository from '@/repositories/ticket-repository';
//import enrollmentRepository, { CreateEnrollmentParams } from '@/repositories/enrollment-repository';
//import { exclude } from '@/utils/prisma-utils';
//import { TicketTypeId } from '@/protocols';

async function getTicketsType() {
    const result = await ticketRepository.getTicketType();
    //console.log("test1:", result);
    return result;
}

async function getTickets(userId: number) {
    const result = await ticketRepository.getTickets(userId);
    //console.log("test1:", result);
    if (!result) {
        throw notFoundError();
    }
    return result;
}

async function postTicket(ticketTypeId: number) {
    const result = await ticketRepository.postTicket(ticketTypeId);
    console.log("post1:", result);
    if (!result) {
        throw notFoundError();
    }
    return result;
}

const ticketsService = {
    getTicketsType,
    getTickets,
    postTicket
    //createOrUpdateEnrollmentWithAddress,
    //getAddressFromCEP,
};

export default ticketsService;