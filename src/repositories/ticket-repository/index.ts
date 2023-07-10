import { prisma } from '@/config';
import { TicketType } from '@/protocols';
import { Ticket } from '@/protocols';


async function getTicketType() {
    const result = await prisma.ticketType.findMany()
    return result;
}

async function getTickets(userId: number) {
    const result = await prisma.ticket.findFirst({
        where: {
            Enrollment: {
                userId: userId,
            },
        },
        include: {
            TicketType: true
        }
    });
    return result;
}

async function postTicket(ticketTypeId: number) {
    const newTicket = await prisma.ticket.create({
        data: {
            status: "RESERVED",
            ticketTypeId: ticketTypeId,
            enrollmentId: null, // Ou forneça um valor válido para a coluna enrollmentId
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        include: {
            TicketType: true,
        },
    });

    return newTicket;
}

const ticketRepository = {
    getTicketType,
    getTickets,
    postTicket
};

export default ticketRepository;
