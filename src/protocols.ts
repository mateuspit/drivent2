export type ApplicationError = {
    name: string;
    message: string;
};

export type ViaCEPAddress = {
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
};

export type ViaCEPAddressError = {
    error: boolean;
};

export type ViaCEPAddressResponse = {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
};

export type AddressEnrollment = {
    logradouro: string;
    complemento: string;
    bairro: string;
    cidade: string;
    uf: string;
    error?: string;
};

export type RequestError = {
    status: number;
    data: object | null;
    statusText: string;
    name: string;
    message: string;
};

export type TicketType = {
    id: number,
    name: string,
    price: number,
    isRemote: boolean,
    includesHotel: boolean,
    createdAt: Date,
    updatedAt: Date
};

export type Ticket = {
    status: string, //RESERVED | PAID
    ticketTypeId: number,
    enrollmentId: number,
    createdAt: Date,
    updatedAt: Date,
};