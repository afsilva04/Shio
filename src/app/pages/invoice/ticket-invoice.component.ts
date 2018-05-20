import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { InvoiceService } from './invoice.service';
import { Invoice } from 'app/pages/invoice/invoice.model';
import { EntsalHeader } from '../transaction/entsal-header.model';

@Component({
  selector: 'ticket-invoice',
  templateUrl: './ticket-invoice.component.html',
  providers: [InvoiceService]
})
export class TicketInvoiceComponent {

    public id: number;
    public invoice: Invoice;

    constructor(
        private _route:ActivatedRoute,
        private _invoiceService:InvoiceService
    ) { 
        this.invoice = new Invoice(new EntsalHeader(0, '', '', '', false, false, '', 0, '', 0, ''), 0, 0, 0, []);
    }

    ngOnInit(){
        this._route.params.forEach((params: Params) => {
			this.id = params['id'];
        });
        
        this._invoiceService.getInvoiceInfo(this.id).subscribe(
            response => {
                this.invoice = response;
            }
        );
    }

    ngAfterViewInit(){
        document.getElementById('preloader').classList.add('hide');                 
    }

}
