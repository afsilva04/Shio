import { Component } from '@angular/core';
import { Appointment } from './appointment.model';
import { AppointmentItem, AppointmentItemCreate } from './appointment-item.model';
import { AppointmentService } from './appointment.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { error } from 'util';
import { Client } from 'app/pages/client/client.model';
import { ClientService } from 'app/pages/client/client.service';

@Component({
	selector: 'appointment-update',
	templateUrl: './appointment-update.component.html',
	providers: [AppointmentService, ClientService]
	})
export class AppointmentUpdateComponent{
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
		private _route:ActivatedRoute,
		private _router:Router,
		private _clientService: ClientService,				
		private ngbDateParserFormatter: NgbDateParserFormatter
	){
		this.title = "Modificar Cita";
		this.titleService = "Servicio";
		this.mode = 'update';
		this.appointment = new Appointment(0, '', '', '', 0, '', 0, '');
		//this.appointment = new Appointment(0, '20180909', 'not', '1', 1, 1);
		this.appointmentItem = new AppointmentItem(0, '', '', 0, '', 0);
		this.appointmentItem1 = new AppointmentItem(1, '10:00', 'Agendada', 1, '', 1);
		this.appointmentItems = [this.appointmentItem1];
		this.clients = [];		
	}

	ngOnInit(){
		this._route.params.forEach((params: Params) => {
			this.appointment.id = params['id'];
		});

		this._clientService.getAllClients().subscribe(
			response => {
				this.clients = response;
				console.log(this.clients);
			}
		);

		this.getAppointment();
		this.getAppointmentItems();

	}

	getAppointment(){
		this._appointmentService.getAppointment(this.appointment.id).subscribe(
			response => {
				this.appointment = response;
				this.dateStruct = this.ngbDateParserFormatter.parse(this.appointment.date);
			},
			error => {
				let body = error.json();
				console.log(body);
			}
		);
	}

	getAppointmentItems(){
		this._appointmentService.getAppointmentItems(this.appointment.id).subscribe(
			response => {
				this.appointmentItems = response;
				console.log(response);
			},
			error => {
				let body = error.json();
				console.log(body);
			}
		);
	}

	updateAppointment(){
		this.appointment.date = this.ngbDateParserFormatter.format(this.dateStruct);
		console.log(this.appointment);

		this._appointmentService.updateAppointment(this.appointment).subscribe(
			response => {
				//this.showMessage('success', 'Creación exitosa', 'Cita ' + this.appointment.date + ' creada correctamente');
				console.log('Cita modificada!');
				this._router.navigate(['/pages/appointment-list']);
			},
			error => {
				let body = error.json();
				console.log(body);
				/*for(let e of body){
					this.showMessage('error', 'Error', e);
				}*/
			}
		)
	}

	createAppointmentItem(){
		this.appointmentItem.appointmentId = this.appointment.id;
		this.appointmentItem.time = this.timeStruct.hour + ':' + this.timeStruct.minute;
		console.log(this.appointmentItem);
		//console.log(this.appointmentItem.id);
	
		this._appointmentService.createAppointmentItem(this.appointmentItem).subscribe(
			response => {
				console.log('Item creado');
				this.modalServiceRef.close();
				this.getAppointmentItems();
			},
			error => {
				let body = error.json();
				console.log(body);
			}
		);
	}

	public onChangeDate(){
		console.log('cambie la fecha');
		console.log(this.dateStruct);
	}

	public createItemModal(modal){
		let itemToCreate = new AppointmentItem(0, '', '', 0, '', 0);
		this.appointmentItem = itemToCreate;
		console.log(itemToCreate);
		this.modalServiceRef = this.modalService.open(modal);
	}

	public updateItemModal(index, modal){
		console.log(index);
		let itemIndex = this.appointmentItems[index];
		let itemToUpdate = new AppointmentItem(itemIndex.id, itemIndex.time, itemIndex.status, 
			itemIndex.serviceId, itemIndex.serviceName, itemIndex.appointmentId);

		this.appointmentItem = itemToUpdate;
		console.log(this.appointmentItem);
		this.mode = 'update';
		//this.itemsTitle = 'Modificar Item';
		this.modalServiceRef = this.modalService.open(modal);
	}

	public deleteItem(index){
		let itemToDelete = this.appointmentItems[index];
		console.log(itemToDelete);
		this._appointmentService.deleteAppointmentItem(itemToDelete.id).subscribe(
			response => {
				console.log('item eliminado');
				this.appointmentItems.splice(index,1);
			},
			error => {
				let body = error.json();
				console.log(body);
			}
		);
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