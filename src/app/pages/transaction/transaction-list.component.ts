import { Component } from '@angular/core';
import { EntsalHeader } from './entsal-header.model';
import { TransactionService } from './transaction.service';
import { element } from 'protractor';

@Component({
	selector: 'transaction-out-list',
	templateUrl: './transaction-list.component.html',
	providers: [TransactionService]
	})
export class TransactionListComponent{
	public title:string;
	public transactions:EntsalHeader[];
	
	constructor(
		private _transactionService:TransactionService
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
}