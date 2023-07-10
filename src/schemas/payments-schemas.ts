//import { getStates, isValidCEP, isValidCPF, isValidMobilePhone } from '@brazilian-utils/brazilian-utils';
import Joi from 'joi';
//import { CreateOrUpdateEnrollmentWithAddress } from '@/services/enrollments-service';

//const ticketIdSchema = Joi.number().required();

export const ticketIdSchema = Joi.object({
    ticketIdSchema: Joi.number().required()
});

//
export const paymentSchema = Joi.object({
    ticketId: Joi.number().required(),
    cardData: {
        issuer: Joi.string().required(),
        number: Joi.number().required(),
        name: Joi.string().required(),
        expirationDate: Joi.string().required(),
        cvv: Joi.number().required()
    }
});
//
