module.exports = {
	Organization : function() {
		this.id = 0;
		this.code = 0;
		this.email = "";
		this.name = "";
		this.phone = "";
		this.type = "";
		this.adress = "";
		this.zip = "";
		this.book = [];
		this.members = [];
		this.accounts = [];
		this.events = [];
		this.parameters = [];
		this.status = "ACTIVE";
		this.timeStamp = new Date().getTime();
		this.dateCreated = new Date().getTime();
	},
	Member : function() {
		this.id = 0;
		this.type = "member";
		this.cli = "Israel"; // Cohen / Levi / Israel
		this.name = "";
		this.adrress = "";
		this.zip = "";
		this.loggedin = false;
		this.email = "";
		this.phone = "";
		this.note = "";
		this.password = "";
		this.birthDate = "";
		this.yahrzeit1 = "";
		this.yahrzeit2 = "";
		this.spouse = "";
		this.fatherName = "";
		this.motherName = "";
		this.status = "ACTIVE";
		this.events = [];
		this.children = [];
		//this.occasions = [];
		this.parasha = "";
		this.barmitzva = "";
		this.timeStamp = new Date().getTime();
	},
	Child : function() {
		this.id = 0;
		this.gender;
		this.Name;
		this.parasha;
		this.barmitzva;
		this.birthDate;
		//this.occasions = [];
	},
	Account : function() {
		this.id = 0;
		this.name = "";
		this.type = "";
		this.memberId = "";
		this.status = "ACTIVE";
		this.timeStamp = new Date().getTime();
	},
	BookRecord : function() {
		this.id = 0;
		this.account = "";
		this.amount = 0.0;
		this.ammountPaid = 0.0;
		this.reason = "";
		this.occasion = "";
		this.paymanteMethod = "";
		this.checkNumber = "";
		this.dueDate = new Date();
		this.payDate = new Date();
		this.paid = false;
		this.budget = "";
		this.receiptNumber = "";
		this.printed = false;
		this.sent = false;
		this.timeStamp = new Date();
	},
	Event : function() {
		this.id = 0;
		this.name = "";
		this.type = "";
		this.eventDate = "";
		this.description = "";
		this.status = "ACTIVE";
		this.timeStamp = new Date();
	},
	Budget : function() {
		this.id = 0;
		this.name = "";
		this.status = "ACTIVE";
		this.eventDate = "";
		this.description = "";
		this.timeStamp = new Date();
	},
	Parameter : function() {
		this.id = 0;
		this.name = "";
		this.type = "";
		this.value = "";
		this.description = "";
		this.timeStamp = new Date();
	},
	Announcement : function() {
		this.id = 0;
		this.startDate = new Date();
		this.endDate = new Date();
		this.title = "";
		this.text = "";
		this.timeStamp = new Date();
	},
	Occasion : function() {
		this.id = 0;
		this.name = "";
		this.hebDate = "";
		this.parasha = "";
		this.date = new Date();
		this.priority = 5;
	}
}
