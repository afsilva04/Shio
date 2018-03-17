import { Component } from '@angular/core';
import { ServiceService } from 'app/pages/service/service.service';
import { Service } from 'app/pages/service/service.model';

@Component({
    selector: 'service-list',
    templateUrl: './service-list.component.html',
    providers: [ServiceService]
})
export class ServiceListComponent{
    public title: string;
    public services: Service[];
    public settings = {
		selectMode: 'single',
		hideHeader: false,
		hideSubHeader: true,
		actions: {
		  columnTitle: 'Acciones',
		  add: false,
		  edit: true,
		  delete: false,
		  custom: [],
		  position: 'right'
		},
		edit: {
		  editButtonContent: '<i class="fa fa-pencil mr-3 text-primary"></i>'
		},
		noDataMessage: 'No data found',
		columns: {     
		  name: {
			title: 'Nombre',
			type: 'string',
			filter: false
		  },
		  commission: {
			title: 'Comision(%)',
			type: 'string'
          },
          time: {
              title: 'Tiempo(min)',
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
          private _serviceService: ServiceService
      ) { }
      
      ngOnInit(){
          this.title = 'Servicios';

          this._serviceService.getServices().subscribe(
              response => {
                  this.services = response;
              }
          );

      }

}