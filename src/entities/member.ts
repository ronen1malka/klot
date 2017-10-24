import { Child } from './child';
import { Event } from './event';
export class Member {
    id: number = 0;
    organizationId: number = 0;
    type: string = "member";
    cli: string = "I"; // Cohen / Levi / Israel
    name: string = "";
    adrress: string = "";
    zip: string = "";
    loggedin: boolean = false;
    email: string = "";
    phone: string = "";
    note: string = "";
    password: string = "";
    spouse: string = "";
    fatherName: string = "";
    motherName: string = "";
    parasha: string = "";
    status: string = "ACTIVE";        
    children: Child[];
    events: Event[];    
    timeStamp: Date = new Date();
}