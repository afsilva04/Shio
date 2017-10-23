import { Component } from '@angular/core';
import { EntsalHeader } from '../transaction/entsal-header.model';
import { EntsalItem } from '../transaction/entsal-item.model';
import { EntsalCoupon } from '../transaction/entsal-coupon.model';

@Component({
	selector: 'simulate-invoice',
	templateUrl: './simulate-invoice.component.html',
	})
export class SimulateInvoiceComponent{
    public id:string;
    public subsidiary:string;
    public header:EntsalHeader;
    public items:EntsalItem[];
    public coupons:EntsalCoupon[];

    constructor(){}

    ngOnInit(){
        let item = new EntsalItem('1', '1', 'concepto', '1', '330', '10', false, '1'); 
        this.items = [item];
    }


}