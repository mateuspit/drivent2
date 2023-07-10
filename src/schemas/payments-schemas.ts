//import { getStates, isValidCEP, isValidCPF, isValidMobilePhone } from '@brazilian-utils/brazilian-utils';
import Joi from 'joi';
//import { CreateOrUpdateEnrollmentWithAddress } from '@/services/enrollments-service';

//const ticketIdSchema = Joi.number().required();

export const ticketIdSchema = Joi.object({
    ticketIdSchema: Joi.number().required()
});
