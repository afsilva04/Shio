import { Component } from '@angular/core';
import { EntryService } from 'app/pages/entry/entry.service';
import { Entry } from 'app/pages/entry/entry.model';
import { Router } from '@angular/router';

@Component({
    selector: 'entry-list',
    templateUrl: './entry-list.component.html',
    providers: [EntryService]
})
export class EntryListComponent{
    public title: string;
    public entries: Entry[];
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
		  id: {
			title: 'Id',
			type: 'string',
			filter: false
		  },
		  date: {
			title: 'Fecha',
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
					private _entryService: EntryService,
					private _router: Router
      ) { }
      
      ngOnInit(){
          this.title = 'Entradas';

          this._entryService.getAllEntries().subscribe(
              response => {
                  this.entries = response;
              }
          );
			}
			
			updateEntry(event){
				this._router.navigate(['/pages/entry-update/', event.data.id]);
			}

}