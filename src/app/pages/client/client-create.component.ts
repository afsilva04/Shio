import { Component } from '@angular/core';
import { Client } from './client.model';
import { ClientService } from './client.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastrService, ToastrConfig } from 'ngx-toastr';

@Component({
	selector: 'client-create',
	templateUrl: './client-form.component.html',
	providers: [ClientService]
	})
export class ClientCreateComponent{
	public title:string;
	public success: boolean;
	public client:Client;
	public options:ToastrConfig;
	public toastrMessage:string;
	public toastrTitle:string;
	private lastInserted: number[] = [];

	constructor(
		private _clientService:ClientService,
		private _router:Router,
		private _toastrService:ToastrService
	){
		this.title = 'Crear Cliente';
		this.success = null;
		//this.client = new Client ('', '', '', '', '', '', '', '', '', '', '', '');
		this.client = new Client (null, null, null, null, null, null, null, null, null, null, null, null);
		this.options = this._toastrService.toastrConfig;
		this.toastrMessage = 'Mensaje!!!';
		this.toastrTitle = 'Titulo!!!';
	}

	public createOrUpdateClient(){
		this._clientService.addClient(this.client).subscribe(
			response => {
				this.showMessage('success', 'Creación exitosa', 'Cliente ' + this.client.name + ' creado correctamente');
				this._router.navigate(['/pages/client-list']);
			},
			error => {
				let body = error.json();
				console.log(body);
				for(let e of body){
					this.showMessage('error', 'Error', e);
				}
			}
		);
	}

	public showMessage(type, title, message){
		this.options.tapToDismiss = true;
		this.options.timeOut = 10000;
		this.options.positionClass = 'toast-top-right';

		this._toastrService.toastrConfig.timeOut = 10000;
		this._toastrService.toastrConfig.extendedTimeOut = 5000;
		this._toastrService.toastrConfig.maxOpened = 0;
		this._toastrService.toastrConfig.tapToDismiss = true;
		this._toastrService.toastrConfig.positionClass = 'toast-top-right';
		this._toastrService.toastrConfig.titleClass = 'toast-title';
		this._toastrService.toasts.push(this._toastrService[type](message,title));

		/*
		const inserted = this._toastrService[type](m, t, opt);
		console.log(inserted);
		if (inserted) {
			this.lastInserted.push(inserted.toastId);
			console.log(this.lastInserted);
		}
		return inserted;
		*/
	}
}