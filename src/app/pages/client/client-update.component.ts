import { Component } from '@angular/core';
import { Client } from './client.model';
import { ClientService } from './client.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastrService, ToastrConfig } from 'ngx-toastr';

@Component({
	selector: 'client-update',
	templateUrl: './client-form.component.html',
	providers: [ClientService]
	})
export class ClientUpdateComponent{
	public title:string;
    public client:Client;
	public id:string;
	public options:ToastrConfig;

	constructor(
		private _clientService:ClientService,
        private _route:ActivatedRoute,
		private _router:Router,
		private _toastrService:ToastrService
	){
		this.title = 'Actualizar Cliente';
		this.client = new Client ('', '', '', '', '', '', '', '', '', '', '', '');
		this.options = this._toastrService.toastrConfig;
    }
    
    ngOnInit(){
        //Get client ID
        this._route.params.forEach((params: Params) => {
			this.id = params['id'];
        });
		//Get Client Info
		this._clientService.getClient(this.id).subscribe(
			result => {
				if(result.code == 200){
					//this.clients = result.data;
					//console.log(result);
				} else {
					//console.log(result);
					this.client = result;
					console.log(this.client);
					//console.log(result[0].nombre);
				}
			}
        );        
    }

	createOrUpdateClient(){
		//Update Client
		this._clientService.updateClient(this.client).subscribe(
			response => {
				this.showMessage('success', 'Modificación exitosa', 'Cliente ' + this.client.name + ' modificado correctamente');
				//Redirect To Client List
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