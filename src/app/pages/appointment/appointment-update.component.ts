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
import { ServiceService } from 'app/pages/service/service.service';
import { Service } from 'app/pages/service/service.model';
import { EmployeeService } from 'app/pages/employee/employee.service';
import { Employee } from 'app/pages/employee/employee.model';
import { Observable } from "rxjs";


@Component({
	selector: 'appointment-update',
	templateUrl: './appointment-update.component.html',
	providers: [AppointmentService, ClientService, ServiceService, EmployeeService]
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
	public services: Service[];
	public employees: Employee[];

	constructor(
		private modalService:NgbModal,
		private _appointmentService: AppointmentService,
		private _route:ActivatedRoute,
		private _router:Router,
		private _clientService: ClientService,		
		private _serviceService: ServiceService,	
		private _employeeService: EmployeeService,	
		private ngbDateParserFormatter: NgbDateParserFormatter
	){
		this.title = "Modificar Cita";
		this.titleService = "Servicio";
		this.mode = 'update';
		this.appointment = new Appointment(0, '', '', '', 0, '', 0, '');
		//this.appointment = new Appointment(0, '20180909', 'not', '1', 1, 1);
		this.appointmentItem = new AppointmentItem(0, '', '', 0, '', 0, '', 0);
		this.appointmentItem1 = new AppointmentItem(1, '10:00', 'Agendada', 1, '', 0, '', 1);
		this.appointmentItems = [this.appointmentItem1];
		this.clients = [];		
		this.services = [];
		this.employees = [];
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

		this._serviceService.getServices().subscribe(
			response => {
				this.services = response;
			}
		);

		this._employeeService.getAllEmployees().subscribe(
			response => {
				this.employees = response;
			}
		);

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
		let d = this.ngbDateParserFormatter.format(this.dateStruct);
		this.appointment.date = new Date(d).toISOString();
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
		
		let dateStr = this.ngbDateParserFormatter.format(this.dateStruct);
		let date = new Date(dateStr);
		date.setHours(this.timeStruct.hour);
		date.setMinutes(this.timeStruct.minute);
		this.appointmentItem.time = date.toISOString();
		
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
		let itemToCreate = new AppointmentItem(0, '', '', 0, '', 0, '', 0);
		this.timeStruct = {	"hour": 9,	"minute": 0, "second": 0 };
		this.appointmentItem = itemToCreate;
		console.log(itemToCreate);
		this.modalServiceRef = this.modalService.open(modal);
	}

	public updateItemModal(index, modal){
		this.appointmentItem = this.appointmentItems[index]; 
		this.timeStruct = this.parseStringToTime(this.appointmentItem.time);
		this.mode = 'update';
		//this.itemsTitle = 'Modificar Item';
		this.modalServiceRef = this.modalService.open(modal);
	}

	public parseStringToTime(time:string) : NgbTimeStruct {
		let arrT = time.split("T");
		let arr = arrT[1].split(":");
		return { "hour": +arr[0], "minute": +arr[1], "second": 0 };
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

	public createTransaction(){
		this._appointmentService.createTransaction(this.appointment.id).subscribe(
			response => {
				this._router.navigate(['/pages/transaction-out-update/', response.id]);
			},
			error => {
				console.log('error serv');
				console.log(error);
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