import { Component } from '@angular/core';
import { Sale } from 'app/pages/reports/sales/sales.model';
import { ReportService } from '../reports.services';

@Component({
    selector: 'sales-report',
    templateUrl: './sales-report.component.html',
    providers: [ReportService]
})
export class SalesReportComponent{
    public title: string;
    public sales: Sale[];
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
		  date: {
			title: 'Fecha',
			type: 'string',
			valuePrepareFunction: (value) => { return new Date(value).toLocaleString() }          },
          concept: {
			title: 'Concepto',
			type: 'string'
          },
		  quantity: {
			title: 'Cantidad',
			type: 'string'
          },
          price: {
			title: 'Precio',
			type: 'string'
          },
          total: {
			title: 'Total',
			type: 'string'
          },
          employeeName: {
			title: 'Empleado',
			type: 'string'
          },
          clientName: {
			title: 'Cliente',
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
          private _reportService: ReportService
      ) { }
      
      ngOnInit(){
          this.title = 'Reporte de Ventas';

          this._reportService.getSalesReport().subscribe(
              response => {
                  this.sales = response;
              }
          );

      }

}