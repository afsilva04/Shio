import { Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Entry, EntryItem } from 'app/pages/entry/entry.model';
import { EntryService } from 'app/pages/entry/entry.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Product } from 'app/pages/product/product.model';
import { ProductService } from 'app/pages/product/product.service';
import { InventoryService } from 'app/pages/reports/inventory/inventory.services';

@Component({
	selector: 'entry-update',
	templateUrl: './entry-update.component.html',
	providers: [EntryService, ProductService, InventoryService]
    })
export class EntryUpdateComponent{
    public title:string;
    public entry: Entry;
    public item: EntryItem;
    public items: EntryItem[];
    public dateStruct:NgbDateStruct;  
    public id;  
    private modalItemRef:NgbModalRef;
    public modeItem: string;
    public itemsTitle: string;
    public products: Product[];  

    constructor(
        private modalService: NgbModal,
        private ngbDateParserFormatter: NgbDateParserFormatter,
        private _entryService: EntryService,
        private _productService: ProductService,
        private _inventoryService: InventoryService,
        private _router: Router,
        private _route: ActivatedRoute
    ){ }

    ngOnInit(){
        this.title = 'Modificar Entrada';
        this.entry = new Entry(0, null, 0, '', 0, 0);
        this.item = new EntryItem(0, null, null, null, null);
        this.items = [];
        this.modeItem = 'add';
        this.itemsTitle = 'Agregar Item';
        this.products = [];
        
        this._route.params.forEach((params: Params) => {
			this.id = params['id'];
        });

        this._entryService.getEntry(this.id).subscribe(
            response => {
                this.entry = response;
				this.dateStruct = this.ngbDateParserFormatter.parse(this.entry.date);                
            }
        );

        this._entryService.getEntryItems(this.id).subscribe(
            response => {
                this.items = response;
            }
        );

        this._productService.getProducts().subscribe(
			response => {
				this.products = response;
			}
		);
    }

    updateEntry(){
		let d = this.ngbDateParserFormatter.format(this.dateStruct);
		this.entry.date = new Date(d).toISOString();

        this._entryService.updateEntry(this.entry).subscribe(
            response => {
                console.log('entrada modificada');
                //this._router.navigate(['/pages/entry-list']);
            }
        );
    }

    addItemModal(modal){
        this.modeItem = 'add';
		this.itemsTitle = 'Agregar Item';
		this.modalItemRef = this.modalService.open(modal);
    }

    addItem(){
        this.item.entryId = this.entry.id;
        this._entryService.createEntryItem(this.item).subscribe(
            response => {
                this._entryService.getEntryItems(this.id).subscribe(
                    response => {
                        this.items = response;
                    }
                );
            }
        );
        this.modalItemRef.close();        
    }

    deleteItem(index){
        this._entryService.deleteEntryItem(this.items[index].id).subscribe(
            response => {
                this._entryService.getEntryItems(this.id).subscribe(
                    response => {
                        this.items = response;
                    }
                );
            }
        );
    }

    updateItemModal(index, modal){
        this.item = this.items[index];        
        this.modeItem = 'update';
		this.itemsTitle = 'Modificar Item';
		this.modalItemRef = this.modalService.open(modal);
    }

    updateItem(){
        this.item.entryId = this.entry.id;
        this._entryService.updateEntryItem(this.item).subscribe(
            response => {
                this._entryService.getEntryItems(this.id).subscribe(
                    response => {
                        this.items = response;
                    }
                );
            }
        );
        this.modalItemRef.close();        
    }

    confirmEntry(){
        this._inventoryService.addInventoryByEntry(this.id).subscribe(
            response => {
                this._entryService.confirmEntry(this.id).subscribe(
                    response => {
                        this.entry.confirmed = response.confirmed;
                        this.entry.confirmedName = response.confirmedName;
                    }
                );
            }
        );
    }

}