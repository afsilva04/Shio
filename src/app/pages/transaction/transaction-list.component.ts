import { Component } from '@angular/core';
import { EntsalHeader } from './entsal-header.model';

@Component({
	selector: 'transaction-out-list',
	templateUrl: './transaction-list.component.html',
	//providers: [TransactionService]
	})
export class TransactionListComponent{
	public title:string;
	public transactions:EntsalHeader[];
	
	constructor(
		//private _transactionService:TransactionService
	){
		this.title = 'Lista de Salidas';
	}

	ngOnInit(){
        let transaction1 = new EntsalHeader('1', '10/05/2017', 'FFAAEERRRRE33098', '1', '12', '1');
        this.transactions = [ transaction1 ];
		
		/*
		this._transactionService.getTransactionsOut().subscribe(
			result => {
				if(result.code == 200){
					this.transactions = result.data;
				} else {
					console.log(result);
				}
			}
		)*/
	}
}