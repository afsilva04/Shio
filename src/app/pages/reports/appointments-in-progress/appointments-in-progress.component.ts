import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ReportService } from '../reports.services';
import { AppointmentsInProgressReport } from '../appointments-in-progress/appointments-in-progress.model';
import { Router } from '@angular/router';

@Component({
    selector: 'appointments-in-progress-report',
    templateUrl: './appointments-in-progress.component.html',
    providers: [ReportService]
})
export class AppointmentsInProgressReportComponent{
    public title: string;
    public appointments: AppointmentsInProgressReport[];
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
          status: {
            title: 'Estado',
			type: 'string'  
          },
		  started: {
			title: 'Hora Inicio',
            type: 'string'
          },
          minutesLeft: {
            title: 'Restante(min)',
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
        rowClassFunction: (row) => {
            if (row.data.minutesLeft < 0) {
              return 'text-danger';
            }
            return '';
        },
		pager: {
		  display: true,
		  perPage: 10
		},
		mode: 'external'
      };

      constructor(
          private _reportService: ReportService,
          private _router: Router
      ) { }
      
      ngOnInit(){
            this.alive = true;
            this.title = 'Reporte de citas en curso';

            Observable.interval(10000).takeWhile(() => this.alive).subscribe(
                () => this.getReportData()
            );

            this.getReportData();
      }

      getReportData(){
        this._reportService.getAppointmentsInProgressReport().subscribe(
            response => {
                this.appointments = response;
            }
        );
      }

      updateAppointment(event){
        this._router.navigate(['/pages/appointment-update/', event.data.appointmentId]);	
      }

      ngOnDestroy(){
            this.alive = false; 
      }

}