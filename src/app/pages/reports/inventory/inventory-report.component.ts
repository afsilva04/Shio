import { Component } from '@angular/core';
import { InventoryService } from 'app/pages/reports/inventory/inventory.services';
import { Inventory } from 'app/pages/reports/inventory/inventory.model';

@Component({
    selector: 'inventory-report',
    templateUrl: './inventory-report.component.html',
    providers: [InventoryService]
})
export class InventoryReportComponent{
    public title: string;
    public inventories: Inventory[];
    public settings = {
		selectMode: 'single',
		hideHeader: false,
		hideSubHeader: true,
		actions: {
		  columnTitle: 'Acciones',
		  add: false,
		  edit: false,
		  delete: false,
		  custom: [],
		  position: 'right'
		},
		edit: {
		  editButtonContent: '<i class="fa fa-pencil mr-3 text-primary"></i>'
		},
		noDataMessage: 'No data found',
		columns: {     
		  productName: {
			title: 'Producto',
			type: 'string',
			filter: false
		  },
		  quantity: {
			title: 'Cantidad',
			type: 'string'
          },
          subsidiaryName: {
              title: 'Sucursal',
              type: 'string'
          }
		},
		pager: {
		  display: true,
		  perPage: 10
		},
		mode: 'external'
      };

      constructor(
          private _companyService: InventoryService
      ) { }
      
      ngOnInit(){
          this.title = 'Reporte de Inventario';

          this._companyService.getInventory().subscribe(
              response => {
                  this.inventories = response;
              }
          );

      }

}