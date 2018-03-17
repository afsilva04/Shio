export class Entry {
    constructor(
        public id: number,
        public date: string,
        public confirmed: number,
        public confirmedName: string,
        public subsidiaryId: number,
        public subsidiaryName: number
                ) { }
} 

export class EntryItem{
    constructor(
        public id: number,
        public quantity: number,
        public productId: number,
        public productName: string,
        public entryId: number
    ) { }
}