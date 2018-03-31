import { Component } from '@angular/core';
import { AppointmentItem } from 'app/pages/appointment/appointment-item.model';
import { AppointmentService } from 'app/pages/appointment/appointment.service';


@Component({
    selector: 'appointments-report',
    templateUrl: './appointments-report.component.html',
    providers: [AppointmentService]
})
export class AppointmentsReportComponent{
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
		  time: {
			title: 'Hora',
			type: 'string',
			filter: false
          },
          state: {
            title: 'Estado',
			type: 'string'  
          },
		  serviceName: {
			title: 'Servicio',
			type: 'string'
          },
          clientName: {
              title: 'Cliente',
              type: 'string'
          },
          employeeName: {
              title: 'Empleado',
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
          this.title = 'Reporte de citas';


          this._appointmentService.getAllAppointmentItems().subscribe(
              response => {
                  this.appointments = response;
              }
          );

      }

}