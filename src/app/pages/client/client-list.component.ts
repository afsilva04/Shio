import { Component } from '@angular/core';
import { Client } from './client.model';
import { ClientFilter } from './client-filter.model';
import { ClientService } from './client.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
	selector: 'client-list',
	templateUrl: './client-list.component.html',
	providers: [ClientService]
	})
export class ClientListComponent{
	public title:string;
	public client:Client;
	public clientFilter:ClientFilter;
	public clients:Client[];
	public mode = 'update';
	private modalRef:NgbModalRef;
	public settings = {
		selectMode: 'single',  //single|multi
		hideHeader: false,
		hideSubHeader: true,
		actions: {
		  columnTitle: 'Acciones',
		  add: false,
		  edit: true,
		  delete: false,
		  custom: [/*
			{
				name: 'disable',
				title: '<i class="fa fa-ban mr-3 text-danger"></i>',
			},
			{
				name: 'enable',
				title: '<i class="fa fa-check mr-3 text-success"></i>',
			}*/],
		  position: 'right' // left|right
		},
		disable: {
			editButtonContent: '<i class="fa fa-trash-o mr-3 text-primary"></i>',
			saveButtonContent: '<i class="fa fa-check mr-3 text-success"></i>',
			cancelButtonContent: '<i class="fa fa-times text-danger"></i>'
		},
		add: {     
		  addButtonContent: '<h4 class="mb-1"><i class="fa fa-plus ml-3 text-success"></i></h4>',
		  createButtonContent: '<i class="fa fa-check mr-3 text-success"></i>',
		  cancelButtonContent: '<i class="fa fa-times text-danger"></i>'
		},
		edit: {
		  editButtonContent: '<i class="fa fa-pencil mr-3 text-primary"></i>',
		  saveButtonContent: '<i class="fa fa-check mr-3 text-success"></i>',
		  cancelButtonContent: '<i class="fa fa-times text-danger"></i>'
		},
		delete: {
		  deleteButtonContent: '<i class="fa fa-trash-o text-danger"></i>',
		  confirmDelete: true
		},
		noDataMessage: 'No se encontraton clientes',
		columns: {     
		  name: {
			title: 'Nombre',
			type: 'string',
			filter: false
			},
		  phone: {
				title: 'Telefono',
				type: 'string'
			},			
		  city: {
			title: 'Ciudad',
			type: 'string'
		  }
		},
		pager: {
		  display: true,
		  perPage: 10
		},
		mode: 'external'
	  };
	
	constructor(
		private _clientService:ClientService,
		private _modalService:NgbModal,
		private _router:Router
	){
		this.title = 'Clientes';
		this.client = new Client('', '', '', '', '', '', '', '', '', '', '', '');
		this.clientFilter = new ClientFilter('');
	}

	ngOnInit(){
		
		this._clientService.getClients(this.clientFilter.text).subscribe(
			result => {
				if(result.code == 200){
					//this.clients = result.data;
					//console.log(result);
				} else {
					console.log(result);
					this.clients = result;
					console.log(this.clients);
					//console.log(result[0].nombre);
				}
				console.log(result);
			}
		);

	}

	updateClient(event){
		this._router.navigate(['/pages/client-update/', event.data.id]);
	}

	public updateClientModal(event, modal): void{
		console.log('Entre a EditClient()');

		//Obtener Cliente
		this._clientService.getClient(event.data.id).subscribe(
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
				
		this.modalRef = this._modalService.open(modal);
	}

	public createOrUpdateClient(){

		//Actualizar Cliente
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

		//Actualizar lista de clientes
		this._clientService.getClients(this.clientFilter.text).subscribe(
			result => {
				if(result.code == 200){
					//this.clients = result.data;
					//console.log(result);
				} else {
					//console.log(result);
					this.clients = result;
					console.log(this.clients);
					//console.log(result[0].nombre);
				}
			}
		);

		this.modalRef.close();

	}

	public changeClientStatus(event): void {
		/*if(event.action == 'disable'){
			if (window.confirm('¿Seguro que desea deshabilitar el usuario?')) {
				console.log('Usuario deshabilitado');
			}
		}
		
		if(event.action == 'enable') {
			if (window.confirm('¿Seguro que desea habilitar el usuario?')) {
				console.log('Usuario habilitado');
			}
		}*/
	}

	public searchClients(){
		console.log(this.clientFilter);

		this._clientService.getClients(this.clientFilter.text).subscribe(
			result => {
				if(result.code == 200){
					//this.clients = result.data;
					//console.log(result);
				} else {
					//console.log(result);
					this.clients = result;
					console.log(this.clients);
					//console.log(result[0].nombre);
				}
			}
		);

	}

	public exportToExcel(){
		console.log('Exportando a Excel');
	}

}