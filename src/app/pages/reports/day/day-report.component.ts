import { Component } from '@angular/core';
import { AppointmentItem } from 'app/pages/appointment/appointment-item.model';
import { ReportService } from 'app/pages/reports/reports.services';
import { Day, DayResume } from 'app/pages/reports/day/day.model';


@Component({
    selector: 'day-report',
    templateUrl: './day-report.component.html',
    providers: [ReportService]
})
export class DayReportComponent{
    public title: string;
    public days: Day[];
    public dayReport: DayResume[];
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
          this.title = 'Reporte del dia';
          this.dayReport = [];

          this._reportService.getDayReport().subscribe(
              response => {
                  this.dayReport = response;
                  console.log(this.dayReport);
              }
          );

      }

}