import { Component } from '@angular/core';

@Component({
	selector: 'appointment-list',
	templateUrl: './appointment-list.component.html'
    })
export class AppointmentListComponent{
    public title:string;

    constructor(){
        this.title = "Citas"
    }
}


