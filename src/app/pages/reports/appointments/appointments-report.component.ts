import { Component } from '@angular/core';
import { ReportService } from 'app/pages/reports/reports.services';
import { AppointmentsReport } from 'app/pages/reports/appointments/appointments-report.model';
import { Router } from '@angular/router';

@Component({
    selector: 'appointments-report',
    templateUrl: './appointments-report.component.html',
    providers: [ReportService]
})
export class AppointmentsReportComponent{
    public title: string;
    public appointments: AppointmentsReport[];
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
            valuePrepareFunction: (value) => { return new Date(value).toLocaleString() }          },
          status: {
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
          private _resportService: ReportService,
          private _router: Router
      ) { }
      
      ngOnInit(){
          this.title = 'Reporte de citas';

          this._resportService.getAppointmentsReport().subscribe(
              response => {
                  console.log(response);
                  this.appointments = response;
              }
          );

      }

      updateAppointment(event){
        this._router.navigate(['/pages/appointment-update/', event.data.appointmentId]);	
      }

}