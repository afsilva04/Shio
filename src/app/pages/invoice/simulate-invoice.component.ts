import { Component } from '@angular/core';
import { EntsalHeader } from '../transaction/entsal-header.model';
import { EntsalItem } from '../transaction/entsal-item.model';
import { EntsalCoupon } from '../transaction/entsal-coupon.model';
import { PaymentMethod } from './payment-method.model';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TransactionService } from '../transaction/transaction.service';
import { InvoiceService } from './invoice.service';
import { Invoice } from 'app/pages/invoice/invoice.model';
import { concat } from 'rxjs/observable/concat';

@Component({
	selector: 'simulate-invoice',
    templateUrl: './simulate-invoice.component.html',
    providers: [TransactionService, InvoiceService]
	})
export class SimulateInvoiceComponent{
    public paymentMethodTitle:string;
    public id:string;
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

    constructor(
        private modalService:NgbModal,
        private _route: ActivatedRoute,
        private _router: Router,
        private _transactionService: TransactionService,
        private _invoiceService: InvoiceService
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
        this.invoice = new Invoice(new EntsalHeader(0, '', '', false, false, '', 0, '', 0, ''), 0, 0, 0, []);
    }

    ngOnInit(){
        this._route.params.forEach((params: Params) => {
            this.id = params['id'];
            this.subsidiary = params['sub'];
        });

        this.header = new EntsalHeader(null, null, null, null, null, null, null, null, null, null);

        //Llamar servicio del back que recibe id, sub y retorna la información de la factura simulada
        //header, items, calculos (subtotal, iva, total)

        this._invoiceService.getInvoiceInfo(this.id).subscribe(
            response => {
                this.invoice = response;
                console.log(this.invoice);
            }
        );
    
        /*
        this._transactionService.getTransaction(this.id).subscribe(
            response => {
                this.header = response;
                console.log(this.header);
            }
        );

        this._transactionService.getTransactionItems(this.id).subscribe(
            response => {
                this.items = response;
                console.log(this.items);
            }
        );
        */

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
        //Llamar servicio del backend para:
        // 1. Generar XML de la factura
        // 2. Consumir servicio SOAP para timbrar la factura
        // 3. Si es exitoso -> - Registrar resultado (Folio Fiscal) en cabecera 
        //                     - Navegar a la salida correspondiente
        //                     - Habilitar botones de imprimir ticket, imprimir factura y cancelar factura
        //    Si NO es exitoso -> Mostrar mensaje de error y permanecer en "Simular Factura"
        console.log('Entre a createInvoice');
    }
    

}