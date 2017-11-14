import { Component, ViewEncapsulation } from '@angular/core';
import { EntsalHeader } from './entsal-header.model';
import { EntsalItem } from './entsal-item.model';
import { EntsalCoupon } from './entsal-coupon.model';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'transaction-out-create',
	templateUrl: './transaction-out-form.component.html',
	encapsulation: ViewEncapsulation.None
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

	constructor(
		private modalService:NgbModal
		){
		this.title = 'Crear Salida';
		this.header = new EntsalHeader('1','','','','','1');
		this.item = new EntsalItem('','','','','','',false, '');
		this.item1 = new EntsalItem('1','Producto','Dabalash','2','1850','0', true, 'Obregon');
		this.item2 = new EntsalItem('2','Servicio','Corte','1','150','20', false, 'Obregon');
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
	}

// ------------------- ITEMS
	public addItemModal(modal){
		this.item.clean();
		this.modalItemRef = this.modalService.open(modal);
	}

	public addItem(){
		//Llamar servicio de agregar item
		//si pudo agregar
		let itemToAdd = new EntsalItem('',this.item.type, this.item.concept, 
			this.item.quantity, this.item.price, this.item.aditional, 
			this.item.anticipated, this.item.subsidiary);

		this.items.push(itemToAdd);
		this.item.clean();
		this.modalItemRef.close();
	}	

	public updateItemModal(index, modal){
		let itemIndex = this.items[index];
		let itemToUpdate = new EntsalItem(itemIndex.id, itemIndex.type, itemIndex.concept, 
			itemIndex.quantity, itemIndex.price, itemIndex.aditional, 
			itemIndex.anticipated, itemIndex.subsidiary);

		this.item = itemToUpdate;
		this.mode = 'update';
		this.itemsTitle = 'Modificar Item';

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
		this.header.invoiceCode = '123';
	}	

	public cancelInvoice(){
		this.header.invoiceCode = '';
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