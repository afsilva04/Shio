import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppointmentService } from './appointment.service';
import { AppointmentItem } from './appointment-item.model';
import { Appointment } from './appointment.model';

@Component({
  selector: 'ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
  providers: [AppointmentService]
})
export class TicketComponent {

    public appointmentId: number;
    public appointment: Appointment;
    public appointmentItems: AppointmentItem[]; 
    public numItems: number;

    constructor(
        private _route:ActivatedRoute,
        private _appointmentService:AppointmentService
    ) { }

    ngOnInit(){
        this._route.params.forEach((params: Params) => {
			this.appointmentId = params['id'];
        });

        this.appointment = new Appointment(null, null, null, null, null, null, null, null);
        this._appointmentService.getAppointment(this.appointmentId).subscribe(
            response => {
                this.appointment = response;
            }
        );
        
        this._appointmentService.getAppointmentItems(this.appointmentId).subscribe(
            response => {
                this.appointmentItems = response;
                console.log(this.appointmentItems);
                this.numItems = this.appointmentItems.length;
            }
        );
    }

    ngAfterViewInit(){
        document.getElementById('preloader').classList.add('hide');                 
    }

}
