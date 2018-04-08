import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Product } from './product.model';
import { ProductService } from './product.service';
import { MessageService } from '../message/toastr.service';

@Component({
	selector: 'product-update',
	templateUrl: './product-form.component.html',
	providers: [ProductService, MessageService]
	})
export class ProductUpdateComponent{
    public title:string;
    public product:Product;

    constructor(
        private _productService:ProductService,
        private _router:Router,
        private _route: ActivatedRoute,
        private _messageService: MessageService
    ){ }

    ngOnInit() {
        this.title = 'Actualizar Producto';
        this.product = new Product(null, null, null, null, null, null, null, null, null);

        this._route.params.forEach((params: Params) => {
			this.product.id = params['id'];
        });

        this._productService.getProduct(this.product.id).subscribe(
            response => {
                this.product = response;
            }
        );
    }

    createOrUpdateProduct(){
        this._productService.updateProduct(this.product).subscribe(
            (response:Product) => {
                this._messageService.showSuccessToastr("Producto " + response.name + " actualizado");
            },
            error => {
                this._messageService.showErrorToastr("Error actualizando producto");
            }
        );
    }
}