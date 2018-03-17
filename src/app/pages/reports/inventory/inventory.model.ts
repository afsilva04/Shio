export class Inventory {
    constructor(
        public id: number,
        private quantity: number,
        private productId: number,
        private productName: string,
        private subsidiaryId: number,
        private subsidiaryName: string
    ) { }
}