import { Component } from '@angular/core';
import { EntsalHeader } from '../transaction/entsal-header.model';
import { EntsalItem } from '../transaction/entsal-item.model';
import { EntsalCoupon } from '../transaction/entsal-coupon.model';
import { PaymentMethod } from './payment-method.model';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TransactionService } from '../transaction/transaction.service';
import { InvoiceService } from './invoice.service';
import { Invoice, InvoiceSat, InvoiceSatUpdate } from 'app/pages/invoice/invoice.model';
import { concat } from 'rxjs/observable/concat';
import { InventoryService } from 'app/pages/reports/inventory/inventory.services';

@Component({
	selector: 'simulate-invoice',
    templateUrl: './simulate-invoice.component.html',
    providers: [TransactionService, InvoiceService, InventoryService]
	})
export class SimulateInvoiceComponent{
    public paymentMethodTitle:string;
    public id:number;
    public subsidiary:string;
    public header:EntsalHeader;
    public items:EntsalItem[];
    public coupons:EntsalCoupon[];
    public paymentMethod:PaymentMethod;
    public paymentMethods:PaymentMethod[];
    private modalPaymentMethodRef:NgbModalRef;
    public mode:string;
    public anotherRFC:boolean;
    public idPaymentMethod:number;
    public subtotal:number;
    public tax:number;
    public total;
    public invoice: Invoice;
    public invoiceSat: InvoiceSat;
    public pdf;
    public invoiceSatUpdate: InvoiceSatUpdate

    constructor(
        private modalService:NgbModal,
        private _route: ActivatedRoute,
        private _router: Router,
        private _transactionService: TransactionService,
        private _invoiceService: InvoiceService,
        private _inventoryService: InventoryService
    ){
        this.paymentMethodTitle = 'Agregar Medoto de Pago';
        this.mode = 'add';
        this.paymentMethod = new PaymentMethod(null,'','', '');
        this.paymentMethods = [];	
        this.anotherRFC = false;
        this.idPaymentMethod = 0;
        this.subtotal = 853.44;
        this.tax = 136.56;
        this.total = 990.00;
        this.invoice = new Invoice(new EntsalHeader(0, '', '', '', false, false, '', 0, '', 0, ''), 0, 0, 0, []);
        this.invoiceSat = new InvoiceSat(0, '', '', '');
        this.pdf = '';
        this.invoiceSatUpdate = new InvoiceSatUpdate(0, '', '');

    }

    ngOnInit(){
        this._route.params.forEach((params: Params) => {
            this.id = params['id'];
            this.subsidiary = params['sub'];
        });

        this.header = new EntsalHeader(null, null, null, null, null, null, null, null, null, null, null);

        //Llamar servicio del back que recibe id, sub y retorna la información de la factura simulada
        //header, items, calculos (subtotal, iva, total)

        this._invoiceService.getInvoiceInfo(this.id).subscribe(
            response => {
                this.invoice = response;
                console.log(this.invoice);
            }
        );

    }

// ------------------- METODOS DE PAGO 

    public addPaymentMethodModal(modal){
        this.paymentMethod.clean();
        this.modalPaymentMethodRef = this.modalService.open(modal);
    }

	public addPaymentMethod(){
        this.paymentMethod.id = this.idPaymentMethod;
        let paymentMethodToAdd = new PaymentMethod(this.paymentMethod.id, this.paymentMethod.type, 
            '', this.paymentMethod.value);
        this.idPaymentMethod = this.idPaymentMethod + 1;

		this.paymentMethods.push(paymentMethodToAdd);
		this.paymentMethod.clean();
        this.modalPaymentMethodRef.close();
        console.log(this.paymentMethods);
	}

	public updatePaymentMethodModal(index, modal){
        let paymentMethodIndex = this.paymentMethods[index];
        console.log('el index es:' + index);
        console.log(paymentMethodIndex);
        let paymentMethodToUpdate = new PaymentMethod(paymentMethodIndex.id, paymentMethodIndex.type, 
            '', paymentMethodIndex.value);

		this.paymentMethod =  paymentMethodToUpdate;
        this.mode = 'update';
		this.paymentMethodTitle = 'Modificar Metodo de pago';
		this.modalPaymentMethodRef = this.modalService.open(modal);
	}

	public updatePaymentMethod(id){
		//Llamar servicio de modificación por id
        //Si se pudo modificar -> Actualizar lista de items
        
        //let paymentMethodIndex = this.paymentMethods.filter(x => x.id == id);
        let paymentMethodToUpdate = new PaymentMethod(this.paymentMethod.id, this.paymentMethod.type, 
            '', this.paymentMethod.value);
        let paymentMethodById = this.paymentMethods.filter(x => x.id == id)[0];
        let index = this.paymentMethods.indexOf(paymentMethodById);
        this.paymentMethods[index] = paymentMethodToUpdate;
        
        this.paymentMethod.clean();		
		this.mode = 'add';
		this.paymentMethodTitle = 'Agregar Metodo de pago';
        this.modalPaymentMethodRef.close();
        
        console.log(this.paymentMethods);
	}		

	public cancelPaymentMethodUpdate(){
		this.paymentMethod.clean();	
		this.mode = 'add';		
		this.paymentMethodTitle = 'Agregar Metodo de Pago';
		this.modalPaymentMethodRef.close();
	}		

	public deletePaymentMethod(index){
		let paymentMethodToDelete = this.paymentMethods[index];
		//Llamar servicio borrar por id
		//Si pudo borrar
        this.paymentMethods.splice(index,1);
        console.log(this.paymentMethods);
    }	    

// ------------------- FACTURAR
    
    public createInvoice(){

        this.invoiceSat.transactionId = this.id;
        //this.invoiceSat.paymentMethod = '99';

        this._invoiceService.createInvoice(this.invoiceSat).subscribe(
            response => {
                this.invoiceSatUpdate.transaction = this.id;
                this.invoiceSatUpdate.pdf = response.cfdi.PDF;
                this.invoiceSatUpdate.invoice = response.cfdi.UUID;

                this._invoiceService.updateTransaction(this.invoiceSatUpdate).subscribe(
                    response => {
                        this._inventoryService.substractInventoryByTransaction(this.id).subscribe(
                            response => {
                                console.log('inventario ok');
                            }
                        );  
                        
                        this._transactionService.generateItemCoupons(this.id).subscribe(
                            response => {
                                this._router.navigate(['/pages/transaction-out-update/' + this.id]);                        
                                window.open(this.invoiceSatUpdate.pdf, "_blank");
                            }
                        );

                    }
                );
            }
        );

    }
    

}