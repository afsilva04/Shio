import { EntsalItem } from "app/pages/transaction/entsal-item.model";
import { EntsalHeader } from "app/pages/transaction/entsal-header.model";

export class Invoice {
    constructor(
        public transaction: EntsalHeader,
        public subtotal: number,
        public tax: number,
        public total: number,
        public transactionItems: EntsalItem[]
    ) { }                 
}