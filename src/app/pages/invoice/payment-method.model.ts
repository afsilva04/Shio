export class PaymentMethod {
    constructor(public id: number,
                public type: string,
                public typeTxt: string,
                public value: string,
                ) { }

    public clean(){
        this.id = null;
        this.type = '';
        this.typeTxt = '';
        this.value = '';
    }                 
}