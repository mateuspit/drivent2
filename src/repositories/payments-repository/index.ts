import { prisma } from '@/config';
//import { TicketType } from '@/protocols';
//import { Ticket } from '@/protocols';


async function getPaymentTicketById(ticketId: number) {
    const result = await prisma.ticket.findUnique({
        where: {
            id: ticketId
        }
    });
    console.log("rep:",result);
    return result;
}

//
async function makePayment(ticketId: number) {
    const result = await prisma.ticket.findUnique({
        where: {
            id: ticketId
        }
    });
    console.log("rep:",result);
    return result;
}
//




const paymentRepository = {
    getPaymentTicketById,
    //
    makePayment
    //
    //getTickets,
    //postTicket
};

export default paymentRepository;
