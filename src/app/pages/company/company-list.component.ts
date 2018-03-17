import { Component } from '@angular/core';
import { CompanyService } from 'app/pages/company/company.service';
import { Company } from 'app/pages/company/company.model';

@Component({
    selector: 'company-list',
    templateUrl: './company-list.component.html',
    providers: [CompanyService]
})
export class CompanyListComponent{
    public title: string;
    public companies: Company[];
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
		  rfc: {
			title: 'RFC',
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
          private _companyService: CompanyService
      ) { }
      
      ngOnInit(){
          this.title = 'Productos';

          this._companyService.getCompanies().subscribe(
              response => {
                  this.companies = response;
              }
          );

      }

}