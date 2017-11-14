export class Appointment {
    constructor(public id: string,
                public client: string,
                public date: string,
                public retaken: boolean,
                public notes: string,
                public subsidiary: string
                ) { }
} 