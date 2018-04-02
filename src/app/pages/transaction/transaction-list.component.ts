import { Component } from '@angular/core';
import { EntsalHeader } from './entsal-header.model';
import { TransactionService } from './transaction.service';
import { element } from 'protractor';
import { Router } from '@angular/router';

@Component({
	selector: 'transaction-out-list',
	templateUrl: './transaction-list.component.html',
	providers: [TransactionService]
	})
export class TransactionListComponent{
	public title:string;
	public transactions:EntsalHeader[];
	public settings = {
		selectMode: 'single',
		hideHeader: false,
		hideSubHeader: true,
		actions: {
		  columnTitle: 'Acciones',
		  add: false,
		  edit: true,
		  delete: false,
		  custom: [],
		  position: 'right'
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
		noDataMessage: 'No data found',
		columns: {     
		  id: {
			title: '#',
			type: 'string',
			filter: false
          },
          date: {
            title: 'Fecha',
			type: 'string'  
          },
		  reasonId: {
			title: 'Motivo',
			type: 'string'
          },
          clientName: {
              title: 'Cliente',
              type: 'string'
          },
          subsidiaryName: {
              title: 'Sucursal',
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
		private _transactionService:TransactionService,
		private _router:Router
	){
		this.title = 'Lista de Salidas';
	}

	ngOnInit(){		
		this._transactionService.getTransactions().subscribe(
			response => {
				this.transactions = response;
			},
			error => {
				console.log(error.json());
			}
		)
	}

	updateTransaction(event){
		this._router.navigate(['/pages/transaction-out-update', event.data.id]);
    }
}