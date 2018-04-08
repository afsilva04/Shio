import { Component } from '@angular/core';
import { ProductService } from 'app/pages/product/product.service';
import { Product } from 'app/pages/product/product.model';
import { Router } from '@angular/router';

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html',
    providers: [ProductService]
})
export class ProductListComponent{
	public title: string;
	public filter: string;
    public products: Product[];
    public settings = {
		selectMode: 'single',
		hideHeader: false,
		hideSubHeader: true,
		actions: {
		  columnTitle: 'Acciones',
		  add: false,
		  edit: true,
		  delete: false,
		  custom: [],
		  position: 'right'
		},
		edit: {
		  editButtonContent: '<i class="fa fa-pencil mr-3 text-primary"></i>'
		},
		noDataMessage: 'No data found',
		columns: {     
			name: {
				title: 'Nombre',
				type: 'string',
				filter: false
			},
			description: {
				title: 'Descripcion',
				type: 'string'
			},
			price: {
				title: 'Precio',
				type: 'string'
			},
			commission: {
				title: 'Comision(%)',
				type: 'string'
			},
		},
		pager: {
		  display: true,
		  perPage: 10
		},
		mode: 'external'
      };

      constructor(
		  private _productService: ProductService,
		  private _router: Router
      ) { }
      
      ngOnInit(){
		  this.title = 'Productos';
		  this.filter = '';

          this._productService.getProducts().subscribe(
              response => {
                  this.products = response;
              }
          );

	  }
	  
	  updateProduct(event){
			this._router.navigate(['/pages/product-update/', event.data.id]);		
	  }

	  searchProducts(){
		this._productService.getProductsFilter(this.filter).subscribe(
			response => {
				this.products = response;
			}
		);
	}

}