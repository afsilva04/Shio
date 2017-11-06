import { Component } from '@angular/core';
import { Client } from './client.model';
import { ClientService } from './client.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'client-create',
	templateUrl: './client-form.component.html',
	providers: [ClientService]
	})
export class ClientCreateComponent{
	public title:string;
	public client:Client;

	constructor(
		private _clientService:ClientService,
		private _router:Router
	){
		this.title = 'Crear Cliente';
		this.client = new Client ('', '', '', '', '', '', '', '', '', '', '', '');
	}

	createClient(){

		this._clientService.addClient(this.client).subscribe(
			response => {
				if(response.code == 200){
					this._router.navigate(['/pages/client-list']);
					console.log(response);
				} else {
					console.log(response);
				}
				this._router.navigate(['/pages/client-list']);
			},
			error => {
				console.log(<any>error)
			}
		);		

		//console.log(this.client);
	}
}