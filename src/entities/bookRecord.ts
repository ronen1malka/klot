export class BookRecord {
    id: number = 0;
    organizationId: number = 0;
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