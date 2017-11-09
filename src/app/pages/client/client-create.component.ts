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
		this.client = new Client ('', '', '', '', '', '', '', '', '', '', '', '');
		this.options = this._toastrService.toastrConfig;
		this.toastrMessage = 'Mensaje!!!';
		this.toastrTitle = 'Titulo!!!';
	}

	ngOnInit(){
		setTimeout(() => {
			this._toastrService.success('Welcome to toaster page!', 'Toastr fun!');
		});
	}

	public createOrUpdateClient(){

		this._clientService.addClient(this.client).subscribe(
			response => {
				if(response.code == 200){
					//this._router.navigate(['/pages/client-list']);
					console.log(response.headers);
				} else {
					console.log(response.headers);
				}
			},
			error => {
				console.log(<any>error)
			}
		);

		this.showMessage('success', 'Transacción exitosa', 'Cliente creado correctamente');
	}

	public showMessage(type, title, message){

		//this._toastrService.success('Hello world!', 'Toastr fun!');
		
		//let m = this.toastrMessage;
		//let t = this.toastrTitle;
		//let type = 'success';

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

		//const opt = JSON.parse(JSON.stringify(this.options));

		//this._toastrService.error(m,t);

		console.log(this._toastrService);

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