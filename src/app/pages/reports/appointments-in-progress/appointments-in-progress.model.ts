export class AppointmentsInProgressReport {
    constructor(
                public appointmentId: number,
                public appointmentItemId: number,
                public status: string,
                public started: string,
                public minutesLeft: string,
                public serviceName: string,
                public clientName: string,
                public employeeName: string,
                public subsidiaryName: string
                ) { }
}