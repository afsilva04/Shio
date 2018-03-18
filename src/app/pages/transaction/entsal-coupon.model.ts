export class EntsalCoupon {
    constructor(public id: string,
                public code: string,
                public transactionId: number
                ) { }

    public clean(){
        this.id = '';
        this.code = '';
        this.transactionId = 0;
    }
} 