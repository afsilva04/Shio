import { Component } from '@angular/core';
import { EntsalHeader } from './entsal-header.model';
import { EntsalItem } from './entsal-item.model';
import { EntsalCoupon } from './entsal-coupon.model';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'transaction-out-update',
	templateUrl: './transaction-out-form.component.html',
	})
export class TransactionOutUpdateComponent{
    public id:string;
    public header:EntsalHeader;
    public item:EntsalItem;
	public items:EntsalItem[];
	public coupon:EntsalCoupon;
	public coupons:EntsalCoupon[];
	public modeItem:string;
    public modeCoupon:string;
    public title:string;
	public itemsTitle:string;
	public couponsTitle:string;
	private modalItemRef:NgbModalRef;
	private modalCouponRef:NgbModalRef;

	constructor(
        private modalService:NgbModal,
        private _route: ActivatedRoute,
		private _router: Router
		){    
            this.title = 'Modificar Salida';
            this.header = new EntsalHeader('','','','','','');
            this.item = new EntsalItem('','','','','','',false, '');
            this.items = []; 
            this.coupon = new EntsalCoupon('','','','','','','','','');
            this.coupons = [];
            this.modeItem = 'add';
            this.modeCoupon = 'add';
            this.itemsTitle = 'Agregar Item';
            this.couponsTitle = 'Agregar Vale';
	}

    ngOnInit(){
        this._route.params.forEach((params: Params) => {
			this.id = params['id'];
        });
        
        /* CARGAR SALIDA
		this._userService.getTransaction(this.id).subscribe(
			result => {
				if(result.code == 200){
                    this.header = result.data.header;
                    this.items = result.data.items;
                    this.coupons = result.data.coupons;
				} else {
					console.log(result);
				}
			}
        )*/
    }

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
		this.modeItem = 'update';
		this.itemsTitle = 'Modificar Item';

		this.modalItemRef = this.modalService.open(modal);
	}

	public updateItem(id){
		//Llamar servicio de modificación por id
		//Si e pudo modificar -> Actualizar lista de items
		this.item.clean();		
		this.modeItem = 'add';
		this.itemsTitle = 'Agregar Item';
		this.modalItemRef.close();
	}	

	public cancelItemUpdate(){
		this.item.clean();	
		this.modeItem = 'add';		
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