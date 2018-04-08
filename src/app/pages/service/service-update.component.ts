import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Service } from './service.model';
import { ServiceService } from './service.service';
import { MessageService } from '../message/toastr.service';

@Component({
	selector: 'service-update',
	templateUrl: './service-form.component.html',
	providers: [ServiceService, MessageService]
	})
export class ServiceUpdateComponent{
    public title:string;
    public service:Service;

    constructor(
        private _serviceService:ServiceService,
        private _router:Router,
        private _route: ActivatedRoute,
        private _messageService: MessageService
    ){ }

    ngOnInit() {
        this.title = 'Actualizar Servicio';
        this.service = new Service(null, null, null, null, null, null, null, null, null, null);

        this._route.params.forEach((params: Params) => {
			this.service.id = params['id'];
        });

        this._serviceService.getService(this.service.id).subscribe(
            response => {
                this.service = response;
            }
        );
    }

    createOrUpdateService(){
        this._serviceService.updateService(this.service).subscribe(
            response => {
                this._messageService.showSuccessToastr("Servicio " + response.name + " actualizado");
            },
            error => {
                this._messageService.showSuccessToastr("Error actualizando servicio");
            }
        );
    }
}