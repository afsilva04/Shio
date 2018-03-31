import { Component } from '@angular/core';
import { AppointmentItem } from 'app/pages/appointment/appointment-item.model';
import { AppointmentService } from 'app/pages/appointment/appointment.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'appointments-in-progress-report',
    templateUrl: './appointments-in-progress.component.html',
    providers: [AppointmentService]
})
export class AppointmentsInProgressReportComponent{
    public title: string;
    public appointments: AppointmentItem[];
    public alive: boolean;
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
          state: {
            title: 'Estado',
			type: 'string'  
          },
		  time: {
			title: 'Hora Inicio',
            type: 'string'
          },
          left: {
            title: 'Restante',
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
            this.alive = true;
            this.title = 'Reporte de citas en curso';

            Observable.interval(10000).takeWhile(() => this.alive).subscribe(
                () => console.log('llamando fun cada 10s')
            );

            this._appointmentService.getAllAppointmentItems().subscribe(
                response => {
                    this.appointments = response;
                }
            );
      }

      ngOnDestroy(){
            this.alive = false; 
      }

}