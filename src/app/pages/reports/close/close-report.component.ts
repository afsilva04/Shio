import { Component } from '@angular/core';
import { AppointmentItem } from 'app/pages/appointment/appointment-item.model';
import { ReportService } from 'app/pages/reports/reports.services';
import { Close } from 'app/pages/reports/close/close.model';

@Component({
    selector: 'close-report',
    templateUrl: './close-report.component.html',
    providers: [ReportService]
})
export class CloseReportComponent{
    public title: string;
    public closeItems: Close[];
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
			type: 'string'
          },    
          reason: {
            title: 'Motivo',
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
		  price: {
			title: 'Precio',
			type: 'string'
          },          
          total: {
              title: 'Total',
              type: 'string'
          },
		  commission: {
			title: 'Comision',
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
          this.title = 'Reporte de cierre';

          this._reportService.getCloseReport().subscribe(
              response => {
                  this.closeItems = response;
              }
          );

      }

}