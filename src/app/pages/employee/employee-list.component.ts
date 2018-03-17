import { Component } from '@angular/core';
import { Employee } from 'app/pages/employee/employee.model';
import { EmployeeService } from 'app/pages/employee/employee.service';

@Component({
    selector: 'employee-list',
    templateUrl: './employee-list.component.html',
    providers: [EmployeeService]
})
export class EmployeeListComponent{
    public title: string;
    public employees: Employee[];
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
		  email: {
			title: 'Correo',
			type: 'string'
		  },
		  phone: {
			title: 'Telefono',
			type: 'string'
			},
		 position: {
				title: 'Cargo',
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
          private _employeeService: EmployeeService
      ) { }
      
      ngOnInit(){
          this.title = 'Empleados';

          this._employeeService.getAllEmployees().subscribe(
              response => {
                  this.employees = response;
              }
          );

      }

}