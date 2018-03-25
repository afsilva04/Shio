export class Inventory {
    constructor(
        public id: number,
        public quantity: number,
        public productId: number,
        public productName: string,
        public subsidiaryId: number,
        public subsidiaryName: string
    ) { }
}