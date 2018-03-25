import { Component } from '@angular/core';
import { ProductService } from 'app/pages/product/product.service';
import { Product } from 'app/pages/product/product.model';

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html',
    providers: [ProductService]
})
export class ProductListComponent{
    public title: string;
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
		},
		pager: {
		  display: true,
		  perPage: 10
		},
		mode: 'external'
      };

      constructor(
          private _employeeService: ProductService
      ) { }
      
      ngOnInit(){
          this.title = 'Productos';

          this._employeeService.getProducts().subscribe(
              response => {
                  this.products = response;
              }
          );

      }

}