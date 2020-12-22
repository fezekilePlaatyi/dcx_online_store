import { Moment } from "moment";

export interface Customer {
    firstName: string;
    lastName: string;
    idNumber: string;
    phoneNumber: string;
    email: string;
    createdAt: Moment;
    modifiedAt: Moment;
}