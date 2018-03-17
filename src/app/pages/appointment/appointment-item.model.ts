export class AppointmentItem {
    constructor(public id: number,
                public time: string,
                public status: string,
                public serviceId: number,
                public serviceName: string,
                private employeeId: number,
                private employeeName: string,
                public appointmentId: number
                ) { }
} 

export class AppointmentItemCreate {
    constructor(
                public time: string,
                public status: string,
                public serviceId: number,
                public appointmentId: number
                ) { }
} 