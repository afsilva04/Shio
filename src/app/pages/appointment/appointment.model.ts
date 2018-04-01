export class Appointment {
    constructor(public id: number,
                public date: string,
                public note: string,
                public rescheduled: boolean,
                public clientId: number,
                public clientName: string,
                public subsidiaryId: number,
                public subsidiaryName: string
                ) { }
} 