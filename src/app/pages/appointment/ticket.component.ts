import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppointmentService } from './appointment.service';
import { AppointmentItem } from './appointment-item.model';

@Component({
  selector: 'ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
  providers: [AppointmentService]
})
export class TicketComponent {

    public appointmentId: number;
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
        
        this._appointmentService.getAppointmentItems(this.appointmentId).subscribe(
            response => {
                this.appointmentItems = response;
                console.log(this.appointmentItems);
                this.numItems = this.appointmentItems.length;
            }
        );
    }

}
