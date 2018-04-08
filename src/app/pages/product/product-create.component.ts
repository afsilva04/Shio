import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from './product.model';
import { ProductService } from './product.service';
import { MessageService } from '../message/toastr.service';

@Component({
	selector: 'product-create',
	templateUrl: './product-form.component.html',
	providers: [ProductService, MessageService]
	})
export class ProductCreateComponent{
    public title:string;
    public product:Product;

    constructor(
        private _productService:ProductService,
        private _router:Router,
        private _messageService:MessageService
    ){ }

    ngOnInit() {
        this.title = 'Crear Producto';
        this.product = new Product(null, null, null, null, null, null, null, null, null);
    }

    createOrUpdateProduct(){
        this._productService.createProduct(this.product).subscribe(
            (response:Product) => {
                this._messageService.showSuccessToastr("Producto " + response.name + " creado");
            },
            error => {
                this._messageService.showErrorToastr("Error creando producto");
            }
        );
    }
}