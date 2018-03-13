export class EntsalHeader {
    constructor(public id: number,
                public date: string,
                public invoice: string,
                public canceled: boolean,
                public processed: boolean,
                public reasonId: string,
                public clientId: number,
                public clientName: string,
                public subsidiaryId: number,
                public subsidiaryName: string
                ) { }
} 