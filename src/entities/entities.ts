namespace Entities {
    export class Organization {
        id: number = -1;
        code: number;
        email: string;
        name: string;
        phone: string;
        type: string;
        adress: string;
        zip: number
        book: Entities.BookRecord[];
        members: Entities.Member[];
        accounts: Entities.Account[];
        events: Entities.Event[];
        parameters: Entities.Parameter[];
        status: string;
        timeStamp: Date;
        dateCreated = Date;
    }

    export class Member {
        id: number = 0;
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
        occasions: Entities.Occasion[];
        events: Event[];
        children: Child[];
        parasha: string = "";
        barmitzva: string = "";
        timeStamp: Date = new Date();
    }

    export class Child {
        id = 0;
        gender: string;
        Name: string;
        parasha: string;
        barmitzva: Date;
        birthDate: Date;
        occasions: Entities.Occasion[];
        timeStamp = new Date();
    }

    export class Account {
        id: number = 0;
        name: string = "";
        type: string = "";
        memberId: string = "";
        status: string = "ACTIVE";
        timeStamp: Date = new Date();
    }

    export class BookRecord {
        id: number = 0;
        account: string = "";
        amount: number = 0.0;
        ammountPaid: number = 0.0;
        reason: string = "";
        occasion: string = "";
        paymanteMethod: string = "";
        checkNumber: string = "";
        dueDate: Date = new Date();
        payDate: Date = new Date();
        paid: boolean = false;
        budget: string = "";
        receiptNumber: number = 0;
        printed: boolean = false;
        sent: boolean = false;
        timeStamp: Date = new Date();
    }

    export class Event {
        id: number = 0;
        name: string = "";
        type: string = "";
        eventDate: Date = new Date();
        description: string = "";
        status: string = "ACTIVE";
        timeStamp: Date = new Date();
    }

    export class Occasion {
        id: number = 0;
        name: string = "";
        hebDate: string = "";
        parasha: string = "";
        date: Date = new Date();
        priority: number = 5;
        timeStamp = new Date();
    }

    export class Parameter {
        id: number = 0;
        name: string = "";
        type: string = "";
        value: string = "";
        description: string = "";
        timeStamp: Date = new Date();
    }

    export class Budget {
        id: number = 0;
        name: string = "";
        status: string = "ACTIVE";
        eventDate: Date = new Date();
        description: string = "";
        timeStamp = new Date();
    }
}