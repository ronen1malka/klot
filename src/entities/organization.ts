import { Parameter } from './parameter';
import { BookRecord } from './bookRecord';
import { Member } from './member';
import { Account } from './account';

export class Organization {
    id: number = -1;
    code: number;
    email: string;
    name: string;
    phone: string;
    type: string;
    adress: string;
    zip: number;
    status: string;
    timeStamp: Date;
    dateCreated = Date;
}