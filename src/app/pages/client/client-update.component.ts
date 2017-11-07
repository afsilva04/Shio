import { Component } from '@angular/core';
import { Client } from './client.model';
import { ClientService } from './client.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'client-update',
	templateUrl: './client-form.component.html',
	providers: [ClientService]
	})
export class ClientUpdateComponent{
	public title:string;
    public client:Client;
    public id:string;

	constructor(
		private _clientService:ClientService,
        private _route:ActivatedRoute,
        private _router:Router
	){
		this.title = 'Actualizar Cliente';
		this.client = new Client ('', '', '', '', '', '', '', '', '', '', '', '');
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
				if(response.code == 200){
					//this._router.navigate(['/productos']);
					console.log(response);
				} else {
					console.log(response);
				}
			},
			error => {
				console.log(<any>error)
			}	
		);
		//Redirect To Client List
		this._router.navigate(['/pages/client-list']);
	}
}