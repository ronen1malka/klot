class Organization {
    id: number = -1;
    code: number;
    email: string;
    name: string;
    phone: string;
    type: string;
    adress: string;
    zip: number
    book = [];
    members : Member[];
    accounts = [];
    events = [];
    parameters = [];
    status: string;
    timeStamp: Date;
    dateCreated = Date;
}