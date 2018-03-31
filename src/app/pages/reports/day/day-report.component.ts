import { Component } from '@angular/core';
import { AppointmentItem } from 'app/pages/appointment/appointment-item.model';
import { AppointmentService } from 'app/pages/appointment/appointment.service';

@Component({
    selector: 'day-report',
    templateUrl: './day-report.component.html',
    providers: [AppointmentService]
})
export class DayReportComponent{
    public title: string;
    public appointments: AppointmentItem[];
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
          private _appointmentService: AppointmentService
      ) { }
      
      ngOnInit(){
          this.title = 'Reporte del dia';

          this._appointmentService.getAllAppointmentItems().subscribe(
              response => {
                  this.appointments = response;
              }
          );

      }

}