export class EntsalCoupon {
    constructor(public id: string,
                public code: string,
                public type:string,
                public concept: string,
                public price: string,
                public quantity:string,
                public date: string,
                public dateUsed:string,
                public subsidiary: string
                ) { }

    public clean(){
        this.id = '';
        this.code = '';
        this.type = '';
        this.concept = '';
        this.price = '';
        this.quantity = '';
        this.date = '';
        this.dateUsed = '';
        this.subsidiary = '';
    }
} 