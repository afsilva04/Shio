import { Component } from '@angular/core';
import { CouponsService } from 'app/pages/reports/coupons/coupons.services';
import { Coupon } from 'app/pages/transaction/coupon.model';

@Component({
    selector: 'coupons-report',
    templateUrl: './coupons-report.component.html',
    providers: [CouponsService]
})
export class CouponsReportComponent{
    public title: string;
    public coupons: Coupon[];
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
         code: {
            title: 'Cupon',
            type: 'string'  
          },             
          productName: {
            title: 'Producto',
			type: 'string'  
          },
          serviceName: {
            title: 'Servicio',
			type: 'string'   
          },
		  quantity: {
			title: 'Cantidad',
			type: 'string'
          },
		  available: {
			title: 'Disponible',
			type: 'string'
          },          
          clientName: {
            title: 'Client',
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
          private _couponsService: CouponsService
      ) { }
      
      ngOnInit(){
          this.title = 'Reporte de ventas anticipadas';

          this._couponsService.getAvailableCoupons().subscribe(
              response => {
                  this.coupons = response;
              }
          );

      }

}