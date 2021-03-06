export class EntsalItem {
    constructor(public id: number,
                public type: string,
                public quantity: number,
                public price: number,
				public aditional: number,
				public anticipated: boolean,
				public coupon: string,
				public dateused: string,
				public productId: number,
				public productName: string,
				public serviceId: number,
				public serviceName: string,
				public employeeId: number,
                public employeeName: string,
				public transactionId: number
                ) { }

	public clean(){
		this.id = null;
		this.type = '';
		this.quantity = null;
		this.price = null;
		this.aditional = null;
		this.anticipated = null;
		this.coupon = null;
		this.dateused = null;
		this.productId = null;
		this.productName = '';
		this.serviceId = null;
		this.serviceName = '';
		this.transactionId = null;
	} 

}