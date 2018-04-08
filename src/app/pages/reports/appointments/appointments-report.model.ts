export class AppointmentsReport {
    constructor(
                public appointmentId: number,
                public appointmentItemId: number,
                public time: string,
                public status: string,
                public serviceName: string,
                public clientName: string,
                public employeeName: string,
                public subsidiaryName: string
                ) { }
}