import { Component } from '@angular/core';
import { SubsidiaryService } from 'app/pages/subsidiary/subsidiary.service';
import { Subsidiary } from 'app/pages/subsidiary/subsidiary.model';

@Component({
    selector: 'subsidiary-list',
    templateUrl: './subsidiary-list.component.html',
    providers: [SubsidiaryService]
})
export class SubsidiaryListComponent{
    public title: string;
    public subsidiaries: Subsidiary[];
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
		  phone: {
			title: 'Telefono',
			type: 'string'
			},
		 cityName: {
				title: 'Ciudad',
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
          private _subsidiaryService: SubsidiaryService
      ) { }
      
      ngOnInit(){
          this.title = 'Sucursales';

          this._subsidiaryService.getAllSubsidiaries().subscribe(
              response => {
                  this.subsidiaries = response;
              }
          );

			}
			
			updateSubsidiary(event){
				
			}

}