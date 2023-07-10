import { prisma } from '@/config';
//import { TicketType } from '@/protocols';
//import { Ticket } from '@/protocols';


async function getPaymentTicketById(ticketId: number) {
    const result = await prisma.ticket.findUnique({
        where: {
            id: ticketId
        }
    });
    return result;
}


//async function getTickets() {
//    const result = await prisma.ticket.findFirst({
//        include: {
//            TicketType: true
//        }
//    });
//    return result;
//}

//async function postTicket(ticketTypeId: number) {
//    const newTicket = await prisma.ticket.create({
//        data: {
//            status: "RESERVED",
//            ticketTypeId: ticketTypeId,
//            enrollmentId: null, // Ou forneça um valor válido para a coluna enrollmentId
//            createdAt: new Date(),
//            updatedAt: new Date(),
//        },
//        include: {
//            TicketType: true,
//        },
//    });

//    return newTicket;
//}

const paymentRepository = {
    getPaymentTicketById
    //getTickets,
    //postTicket
};

export default paymentRepository;
