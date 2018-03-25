export class Coupon {
    constructor(public id: number,
                public code: string,
                public quantity: number,
                public available: number,
                public transactionorigin: number,
                public transactionused: number,
                public productId: number,
                public productName: string,
                public serviceId: number,
                public serviceName: string,
                public clientId: number,
                public clientName: string
                ) { }
} 