import { Component, ViewEncapsulation } from '@angular/core';
import { EntsalHeader } from './entsal-header.model';
import { EntsalItem } from './entsal-item.model';
import { EntsalCoupon } from './entsal-coupon.model';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { TransactionService } from './transaction.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'transaction-out-create',
	templateUrl: './transaction-out-form.component.html',
	providers: [TransactionService]
	})
export class TransactionOutCreateComponent{
	public title:string;
	public itemsTitle:string;
	public couponsTitle:string;
	public header:EntsalHeader;
	public item:EntsalItem;
	public item1:EntsalItem;
	public item2:EntsalItem;
	public items:EntsalItem[];
	public coupon:EntsalCoupon;
	public coupons:EntsalCoupon[];
	public mode:string;
	public modeCoupon:string;
	private modalItemRef:NgbModalRef;
	private modalCouponRef:NgbModalRef;
	public dateStruct:NgbDateStruct;

	constructor(
		private modalService:NgbModal,
		private _transactionService: TransactionService,
		private ngbDateParserFormatter: NgbDateParserFormatter,
		private _router:Router
		){
		this.title = 'Crear Salida';
		this.header = new EntsalHeader(0, '', '', false, false, '', 0, '', 0, '');
		this.items = []; //[ this.item1, this.item2 ];
		this.mode = 'add';
		this.modeCoupon = 'add';
		this.itemsTitle = 'Agregar Item';
		this.couponsTitle = 'Agregar Vale';
		this.coupon = new EntsalCoupon('','','','','','','','','');
		this.coupons = [];	
	}

	ngOnInit(){}

// ------------------- CABECERA
	onSubmit(){
		console.log(this.header);
		this.header.date = this.ngbDateParserFormatter.format(this.dateStruct);
		
		this._transactionService.createTransaction(this.header).subscribe(
			response => {
				//this.showMessage('success', 'Creación exitosa', 'Cita ' + this.appointment.date + ' creada correctamente');
				console.log('Transaccion creada1!');
				this._router.navigate(['/pages/transaction-out-update', response.id]);
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
		this.item.clean();
		this.modalItemRef = this.modalService.open(modal);
	}

	public updateItem(id){
		//Llamar servicio de modificación por id
		//Si e pudo modificar -> Actualizar lista de items
		this.item.clean();		
		this.mode = 'add';
		this.itemsTitle = 'Agregar Item';
		this.modalItemRef.close();
	}	

	public cancelItemUpdate(){
		this.item.clean();	
		this.mode = 'add';		
		this.itemsTitle = 'Agregar Item';
		this.modalItemRef.close();
	}	

	public deleteItem(index){
		let itemToDelete = this.items[index];
		console.log(itemToDelete);
		//Llamar servicio borrar por id
		//Si pudo borrar
		this.items.splice(index,1);
	}	

// ------------------- VALES
	public addCouponModal(modal){
		this.coupon.clean();
		this.modalCouponRef = this.modalService.open(modal);
	}

	public addCoupon(){
		let couponToAdd = new EntsalCoupon('', this.coupon.code, this.coupon.type, 
			this.coupon.concept, this.coupon.price, this.coupon.quantity, 
			this.coupon.date, this.coupon.dateUsed, this.coupon.subsidiary);

		this.coupons.push(couponToAdd);
		this.coupon.clean();
		this.modalCouponRef.close();
		console.log(this.coupons);
	}

	public updateCouponModal(index, modal){
		let couponIndex = this.coupons[index];
		let couponToUpdate = new EntsalCoupon(couponIndex.id, couponIndex.code, couponIndex.type, 
			couponIndex.concept, couponIndex.price, couponIndex.quantity, 
			couponIndex.date, couponIndex.dateUsed, couponIndex.subsidiary);

		this.coupon = couponToUpdate;
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
		this.header.invoice = '';
	}

}







/*
	public getData(data) {
		const req = new XMLHttpRequest();
		req.open('GET', 'assets/data/users.json');
		req.onload = () => {
		  data(JSON.parse(req.response));
		};
		req.send();
	}

	public onDeleteConfirm(event): void {
		if (window.confirm('Are you sure you want to delete?')) {
		  event.confirm.resolve();
		} else {
		  event.confirm.reject();
		}
	}*/