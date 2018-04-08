import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from './service.model';
import { ServiceService } from './service.service';
import { MessageService } from '../message/toastr.service';

@Component({
	selector: 'service-create',
	templateUrl: './service-form.component.html',
	providers: [ServiceService, MessageService]
	})
export class ServiceCreateComponent{
    public title:string;
    public service:Service;

    constructor(
        private _serviceService:ServiceService,
        private _router:Router,
        private _messageService:MessageService
    ){ }

    ngOnInit() {
        this.title = 'Crear Servicio';
        this.service = new Service(null, null, null, null, null, null, null, null, null, null);
    }

    createOrUpdateService(){
        this._serviceService.createService(this.service).subscribe(
            (response:Service) => {
                this._messageService.showSuccessToastr("Servicio " + response.name + " creado")
            },
            error => {
                this._messageService.showErrorToastr("Error creando servicio");
            }
        );
    }
}