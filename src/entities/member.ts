import { Child } from './child';
export class Member {
    id: number = 0;
    organizationId: number = 0;
    type: string = "member";
    cli: string = "Israel"; // Cohen / Levi / Israel
    name: string = "";
    adrress: string = "";
    zip: string = "";
    loggedin: boolean = false;
    email: string = "";
    phone: string = "";
    note: string = "";
    password: string = "";
    birthDate: string = "";
    yahrzeit1: string = "";
    yahrzeit2: string = "";
    spouse: string = "";
    fatherName: string = "";
    motherName: string = "";
    status: string = "ACTIVE";        
    children: Child[];
    parasha: string = "";
    barmitzva: string = "";
    timeStamp: Date = new Date();
}