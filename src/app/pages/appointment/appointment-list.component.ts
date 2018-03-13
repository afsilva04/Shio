import { Component } from '@angular/core';
import { Appointment } from 'app/pages/appointment/appointment.model';
import { AppointmentService } from './appointment.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
	selector: 'appointment-list',
    templateUrl: './appointment-list.component.html',
    providers: [AppointmentService]
    })
export class AppointmentListComponent{
    public title:string;
    public appointment: Appointment;
    public appointments: Appointment[];

    public settings = {
		selectMode: 'single',  //single|multi
		hideHeader: false,
		hideSubHeader: true,
		actions: {
		  columnTitle: 'Acciones',
		  add: false,
		  edit: true,
		  delete: false,
		  custom: [],
		  position: 'right' // left|right
		},
		disable: {
			editButtonContent: '<i class="fa fa-trash-o mr-3 text-primary"></i>',
			saveButtonContent: '<i class="fa fa-check mr-3 text-success"></i>',
			cancelButtonContent: '<i class="fa fa-times text-danger"></i>'
		},
		add: {     
		  addButtonContent: '<h4 class="mb-1"><i class="fa fa-plus ml-3 text-success"></i></h4>',
		  createButtonContent: '<i class="fa fa-check mr-3 text-success"></i>',
		  cancelButtonContent: '<i class="fa fa-times text-danger"></i>'
		},
		edit: {
		  editButtonContent: '<i class="fa fa-pencil mr-3 text-primary"></i>',
		  saveButtonContent: '<i class="fa fa-check mr-3 text-success"></i>',
		  cancelButtonContent: '<i class="fa fa-times text-danger"></i>'
		},
		delete: {
		  deleteButtonContent: '<i class="fa fa-trash-o text-danger"></i>',
		  confirmDelete: true
		},
		noDataMessage: 'No se encontraton citas',
		columns: {     
		  date: {
			title: 'Fecha',
			type: 'string',
			filter: false
			},
		  clientName: {
				title: 'Cliente',
				type: 'string'
			}
		},
		pager: {
		  display: true,
		  perPage: 10
		},
		mode: 'external'
	  };

    constructor(
        private _appointmentService: AppointmentService,
        private _router:Router
    ){
        this.title = "Citas"
    }

    ngOnInit(){
        this.appointments = [ new Appointment(1, '2018', 'nota', '1', 1, '', 1, '') ];

        this._appointmentService.getAppointments().subscribe(
            response => {
                this.appointments = response;
                console.log(this.appointments);
            }, 
            error => {
                let body = error.json();
				console.log(body);
            }
        );
    }

    updateAppointment(event){
        this._router.navigate(['/pages/appointment-update/', event.data.id]);
    }


}


