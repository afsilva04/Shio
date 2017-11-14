export class EntsalItem {
    constructor(public id: string,
                public type: string,
                public concept: string,
                public quantity:string,
                public price: string,
                public aditional: string,
                public anticipated: boolean,
                public subsidiary: string
                ) { }

	public clean(){
		this.id = '';
		this.type = '';
		this.concept = '';
		this.quantity = '';
		this.price = '';
		this.aditional = '';
		this.anticipated = false;
		this.subsidiary = '';
	} 

}