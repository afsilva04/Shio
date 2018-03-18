import { Component } from '@angular/core';
import { EntsalHeader } from './entsal-header.model';
import { EntsalItem } from './entsal-item.model';
import { EntsalCoupon } from './entsal-coupon.model';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TransactionService } from './transaction.service';
import { error } from 'selenium-webdriver';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'app/pages/product/product.model';
import { ProductService } from 'app/pages/product/product.service';
import { Service } from 'app/pages/service/service.model';
import { ServiceService } from 'app/pages/service/service.service';
import { Client } from 'app/pages/client/client.model';
import { ClientService } from 'app/pages/client/client.service';
import { EmployeeService } from 'app/pages/employee/employee.service';
import { Employee } from 'app/pages/employee/employee.model';

@Component({
	selector: 'transaction-out-update',
	templateUrl: './transaction-out-update.component.html',
	providers: [TransactionService, ProductService, ServiceService, ClientService, EmployeeService]
	})
export class TransactionOutUpdateComponent{
    public id:number;
    public header:EntsalHeader;
    public item:EntsalItem;
	public items:EntsalItem[];
	public coupon:EntsalCoupon;
	public coupons:EntsalCoupon[];
	public activeCoupons:EntsalCoupon[];	
	public modeItem:string;
    public modeCoupon:string;
    public title:string;
	public itemsTitle:string;
	public couponsTitle:string;
	private modalItemRef:NgbModalRef;
	private modalCouponRef:NgbModalRef;
	public dateStruct:NgbDateStruct;
	public products:Product[];
	public services:Service[];
	public clients: Client[];
	public employees: Employee[];

	constructor(
        private modalService:NgbModal,
        private _route: ActivatedRoute,
		private _router: Router,
		private _transactionService: TransactionService,
		private _productService: ProductService,
		private _serviceService: ServiceService,
		private _clientService: ClientService,
		private _employeeService: EmployeeService,
		private ngbDateParserFormatter: NgbDateParserFormatter
		){    
            this.title = 'Modificar Salida';
            this.header = new EntsalHeader(0,'','','',false,false,'',0,'',0,'');
            this.item = new EntsalItem(null, '', null, null, null, null, null, null, null, '', null, '', null, '', null);
            this.items = []; 
            this.coupon = new EntsalCoupon('','', 0);
			this.coupons = [];
			this.activeCoupons = [];
            this.modeItem = 'add';
            this.modeCoupon = 'add';
            this.itemsTitle = 'Agregar Item';
			this.couponsTitle = 'Agregar Cupon';
			this.products = [];
			this.services = [];
			this.clients = [];
			this.employees = [];
	}

    ngOnInit(){
        this._route.params.forEach((params: Params) => {
			this.id = params['id'];
        });
        
		this._transactionService.getTransaction(this.id).subscribe(
			response => {
				this.header = response;
				this.dateStruct = this.ngbDateParserFormatter.parse(this.header.date);
				//this.items = response.data.items;
				//this.coupons = response.data.coupons;
			},
			error => {
				console.log(error.JSON());
			}
		);
		
		this._transactionService.getTransactionItems(this.id).subscribe(
			response => {
				this.items = response;
			},
			error => {
				console.log(error.JSON());
			}
		);

		this._productService.getProducts().subscribe(
			response => {
				this.products = response;
			}
		);

		this._serviceService.getServices().subscribe(
			response => {
				this.services = response;
			}
		);

		this._clientService.getAllClients().subscribe(
			response => {
				this.clients = response;
				console.log(this.clients);
			}
		);

		this._employeeService.getAllEmployees().subscribe(
			response => {
				this.employees = response;
			}
		);

		this._transactionService.getActiveCoupons().subscribe(
			response => {
				this.activeCoupons = response;
			}
		);

    }

// ------------------- CABECERA
	onSubmit(){
		console.log(this.header);
		this.header.date = this.ngbDateParserFormatter.format(this.dateStruct);
		
		this._transactionService.updateTransaction(this.header).subscribe(
			response => {
				//this.showMessage('success', 'Creación exitosa', 'Cita ' + this.appointment.date + ' creada correctamente');
				console.log('Transaccion actualizada!');
				this._router.navigate(['/pages/transaction-list']);
			},
			error => {
				let body = error.json();
				console.log(body);
				/*for(let e of body){
					this.showMessage('error', 'Error', e);
				}*/
			}
		);
	}

// ------------------- ITEMS
	public addItemModal(modal){
		//this.item.clean();
		this.item.id = null;
		this.item.type = '';
		this.item.quantity = null;
		this.item.price = null;
		this.item.aditional = null;
		this.item.productId = null;
		this.item.productName = '';
		this.item.serviceId = null;
		this.item.serviceName = '';
		this.item.employeeId = 0;
		this.item.employeeName = '';
		this.item.transactionId = null;

		this.modeItem = 'add';
		this.itemsTitle = 'Agregar Item';
		this.modalItemRef = this.modalService.open(modal);
	}

	public addItem(){
		this.item.transactionId = this.id;
		this.item.aditional = 0;
		this._transactionService.createTransactionItem(this.item).subscribe(
			response => {
				this._transactionService.getTransactionItems(this.id).subscribe(
					response => {
						this.items = response;
					},
					error => {
						console.log(error.JSON());
					}
				);
			},
			error => {
				console.log(error.JSON());
			}
		);

		//this.item.clean();
		this.modalItemRef.close();
	}	

	public updateItemModal(index, modal){
		this.item = this.items[index];
		this.modeItem = 'update';
		this.itemsTitle = 'Modificar Item';
		this.modalItemRef = this.modalService.open(modal);
	}

	public updateItem(id){
		//this.item.transactionId = this.id;
		console.log(this.item);
		this._transactionService.updateTransactionItem(this.item).subscribe(
			response => {
				this._transactionService.getTransactionItems(this.id).subscribe(
					response => {
						this.items = response;
					},
					error => {
						console.log(error.JSON());
					}
				);
			},
			error => {
				console.log(error.JSON());
			}
		);
		//this.item.clean();		
		this.modalItemRef.close();
	}	

	public cancelItemUpdate(){
		this.item.clean();	
		this.modeItem = 'add';		
		this.itemsTitle = 'Agregar Item';
		this.modalItemRef.close();
	}	

	public deleteItem(index){
		this._transactionService.deleteTransactionItem(this.items[index].id).subscribe(
			response => {
				this._transactionService.getTransactionItems(this.id).subscribe(
					response => {
						this.items = response;
					},
					error => {
						console.log(error.JSON());
					}
				);
			}
		);
		//this.items.splice(index,1);
	}	

// ------------------- VALES
	public addCouponModal(modal){
		this.coupon.clean();
		this.modalCouponRef = this.modalService.open(modal);
	}

	public addCoupon(){
		/*let couponToAdd = new EntsalCoupon('', this.coupon.code, this.coupon.type, 
			this.coupon.concept, this.coupon.price, this.coupon.quantity, 
			this.coupon.date, this.coupon.dateUsed, this.coupon.subsidiary);

		this.coupons.push(couponToAdd);*/
		this.coupon.clean();
		this.modalCouponRef.close();
		console.log(this.coupons);
	}

	public updateCouponModal(index, modal){
		let couponIndex = this.coupons[index];
		/*let couponToUpdate = new EntsalCoupon(couponIndex.id, couponIndex.code, couponIndex.type, 
			couponIndex.concept, couponIndex.price, couponIndex.quantity, 
			couponIndex.date, couponIndex.dateUsed, couponIndex.subsidiary);

		this.coupon = couponToUpdate;*/
		this.modeCoupon = 'update';
		this.couponsTitle = 'Modificar Vale';

		this.modalCouponRef = this.modalService.open(modal);
	}

	public updateCoupon(id){
		//Llamar servicio de modificación por id
		//Si e pudo modificar -> Actualizar lista de items
		this.coupon.clean();		
		this.modeCoupon = 'add';
		this.couponsTitle = 'Agregar Vale';
		this.modalCouponRef.close();
	}		

	public cancelCouponUpdate(){
		this.coupon.clean();	
		this.modeCoupon = 'add';		
		this.couponsTitle = 'Agregar Vale';
		this.modalCouponRef.close();
	}		

	public deleteCoupon(index){
		let couponToDelete = this.coupons[index];
		console.log(couponToDelete);
		//Llamar servicio borrar por id
		//Si pudo borrar
		this.coupons.splice(index,1);
	}		

// ------------------- FACTURA
	public simulateInvoice(){
		this.header.invoice = '123';
	}	

	public cancelInvoice(){
		//this.header.invoice = '';
	}

	public printInvoice(){
		window.open(this.header.invoicePdf, "_blank");     
	}

}