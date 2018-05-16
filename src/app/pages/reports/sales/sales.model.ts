export class Sale {
    constructor(
        public date: string,
        public productId: number,
        public productName: string,
        public serviceId: number,
        public serviceName: string,
        public concept: string,
        public quantity: number,
        public price: string,
        public total: number,
        public commision: string,
        public employeeId: number,
        public employeeName: string,
        public clientId: number,
        public clientName: string,
        public subsidiaryId: number,
        public subsidiaryName: string
    ) { }
}