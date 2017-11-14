import { Component } from '@angular/core';
import { Appointment } from './appointment.model';
import { AppointmentService } from './appointment-service.model';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'appointment-create',
	templateUrl: './appointment-create.component.html'
	})
export class AppointmentCreateComponent{
	public title:string;
	public titleService:string;
	private mode;
	public appointment:Appointment;
	public appointmentService:AppointmentService;
	public appointmentService1:AppointmentService;
	public appointmentServices:AppointmentService[];
	private modalServiceRef:NgbModalRef;

	constructor(
		private modalService:NgbModal
	){
		this.title = "Crear Cita";
		this.titleService = "Crear Servicio";
		this.mode = 'add';
		this.appointment = new Appointment('', '', '', false, '', '');
		this.appointmentService = new AppointmentService('', '', '', '', '', '');
		this.appointmentService1 = new AppointmentService('1', '10:00 - 11:00', 'Agendada', '3335566', 'Lupita', 'Corte');
		this.appointmentServices = [this.appointmentService1];
	}

	public createDate(){
		console.log(this.appointment);
	}

	public onChangeDate(){
		console.log('cambie la fecha');
	}

// ------------------- SERVICIOS

	public addServiceModal(modal){
		//this.appointmentService.clean();
		this.modalServiceRef = this.modalService.open(modal);
	}
	
	public addService(){
		console.log(this.appointmentService);
	}
}