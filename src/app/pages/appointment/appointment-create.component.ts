import { Component } from '@angular/core';
import { Appointment } from './appointment.model';
import { AppointmentItem } from './appointment-item.model';
import { AppointmentService } from './appointment.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { Client } from 'app/pages/client/client.model';
import { ClientService } from 'app/pages/client/client.service';

@Component({
	selector: 'appointment-create',
	templateUrl: './appointment-create.component.html',
	providers: [AppointmentService, ClientService]
	})
export class AppointmentCreateComponent{
	public title:string;
	public titleService:string;
	private mode;
	public appointment:Appointment;
	public appointmentItem:AppointmentItem;
	public appointmentItem1:AppointmentItem;
	public appointmentItems:AppointmentItem[];
	private modalServiceRef:NgbModalRef;
	public dateStruct:NgbDateStruct;
	public timeStruct:NgbTimeStruct;
	public clients: Client[];

	constructor(
		private modalService:NgbModal,
		private _appointmentService: AppointmentService,
		private _router:Router,
		private _clientService: ClientService,		
		private ngbDateParserFormatter: NgbDateParserFormatter
	){
		this.title = "Crear Cita";
		this.titleService = "Crear Servicio";
		this.mode = 'add';
		//this.appointment = new Appointment(0, '', '', '', 0, 0);
		this.appointment = new Appointment(0, '', '', '', 0, '', 0, '');
		this.appointmentItem = new AppointmentItem(0, '', '', 0, '', 0, '', 0);
		this.appointmentItem1 = new AppointmentItem(1, '10:00', 'Agendada', 1, '', 0, '', 1);
		this.appointmentItems = [this.appointmentItem1];
		this.clients = [];
	}

	ngOnInit(){
		this._clientService.getAllClients().subscribe(
			response => {
				this.clients = response;
				console.log(this.clients);
			}
		);
	}

	public createAppointment(){
		let d = this.ngbDateParserFormatter.format(this.dateStruct);
		this.appointment.date = new Date(d).toISOString();
		console.log(this.appointment);
		this._appointmentService.createAppointment(this.appointment).subscribe(
			response => {
				//this.showMessage('success', 'Creación exitosa', 'Cita ' + this.appointment.date + ' creada correctamente');
				console.log('Cita creada1!');
				this._router.navigate(['/pages/appointment-list']);
			},
			error => {
				let body = error.json();
				console.log(body);
				//for(let e of body){
				//	this.showMessage('error', 'Error', e);
				//}
			}
		);
	}

	public onChangeDate(){
		console.log('cambie la fecha');
		console.log(this.dateStruct);
	}

// ------------------- SERVICIOS

	public addServiceModal(modal){
		//this.appointmentService.clean();
		this.modalServiceRef = this.modalService.open(modal);
	}
	
	public addService(){
		console.log(this.appointmentItem);
	}

}