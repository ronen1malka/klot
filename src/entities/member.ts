class Member {
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
    events = [];
    children = [];
    parasha: string = "";
    barmitzva: string = "";
    timeStamp: Date = new Date();
}