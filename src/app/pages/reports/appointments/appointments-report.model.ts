export class AppointmentsReport {
    constructor(
                public time: string,
                public status: string,
                public serviceName: string,
                public clientName: string,
                public employeeName: string,
                public subsidiaryName: string
                ) { }
}