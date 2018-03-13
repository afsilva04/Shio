import { Component } from '@angular/core';
import { User } from './user.model';
import { UserFilter } from './user-filter.model';
import { UserService } from './user.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'user-list',
	templateUrl: './user-list.component.html',
	providers: [UserService]
	})
export class UserListComponent{
	public title:string;
	public user:User;
	public userFilter:UserFilter;
	public users:User[];
	public mode = 'update';
	private modalRef:NgbModalRef;
	public settings = {
		selectMode: 'single',  //single|multi
		hideHeader: false,
		hideSubHeader: true,
		actions: {
		  columnTitle: 'Acciones',
		  add: false,
		  edit: true,
		  delete: false,
		  custom: [/*
			{
				name: 'disable',
				title: '<i class="fa fa-ban mr-3 text-danger"></i>',
			},
			{
				name: 'enable',
				title: '<i class="fa fa-check mr-3 text-success"></i>',
			}*/],
		  position: 'right' // left|right
		},
		disable: {
			editButtonContent: '<i class="fa fa-trash-o mr-3 text-primary"></i>',
			saveButtonContent: '<i class="fa fa-check mr-3 text-success"></i>',
			cancelButtonContent: '<i class="fa fa-times text-danger"></i>'
		},
		add: {     
		  addButtonContent: '<h4 class="mb-1"><i class="fa fa-plus ml-3 text-success"></i></h4>',
		  createButtonContent: '<i class="fa fa-check mr-3 text-success"></i>',
		  cancelButtonContent: '<i class="fa fa-times text-danger"></i>'
		},
		edit: {
		  editButtonContent: '<i class="fa fa-pencil mr-3 text-primary"></i>',
		  saveButtonContent: '<i class="fa fa-check mr-3 text-success"></i>',
		  cancelButtonContent: '<i class="fa fa-times text-danger"></i>'
		},
		delete: {
		  deleteButtonContent: '<i class="fa fa-trash-o text-danger"></i>',
		  confirmDelete: true
		},
		noDataMessage: 'No data found',
		columns: {     
		  /*id: {
			title: 'ID',
			editable: false,
			type: 'string'     
		  },*/
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
			role: {
				title: 'Rol',
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
		private _userService:UserService	,
		private _modalService:NgbModal
	){
		this.title = 'Usuarios';
		this.user = new User('', '', '', '', '', '', '', '', true);
		this.userFilter = new UserFilter('', '', '', '', '', null);
	}

	ngOnInit(){
		let user1 = new User ('1', 'Andres', 'andres@gmail.com', '3329155', 'rol1', 'sucursal1', 'pass', 'pass', true);
		let user2 = new User ('2', 'Jessi', 'jessi@gmail.com', '3334455', 'rol2', 'sucursal2', 'pass', 'pass', true);
		let user3 = new User ('3', 'Juan', 'juan@gmail.com', '5560098', 'rol1', 'sucursal1', 'pass', 'pass', true);
		this.users = [ user1, user2, user3, user1, user2, user3, user1, user2, user3, user1, user2, user3 ];
		
		/*
		this._userService.getUsers().subscribe(
			result => {
				if(result.code == 200){
					this.users = result.data;
				} else {
					console.log(result);
				}
			}
		)*/

	}

	public editUser(event, modal): void{
		console.log('Entre a EditUser()');
		console.log(event.data.name);
		this.modalRef = this._modalService.open(modal);
	}

	public changeUserStatus(event): void {
		if(event.action == 'disable'){
			if (window.confirm('¿Seguro que desea deshabilitar el usuario?')) {
				console.log('Usuario deshabilitado');
			}
		}
		
		if(event.action == 'enable') {
			if (window.confirm('¿Seguro que desea habilitar el usuario?')) {
				console.log('Usuario habilitado');
			}
		}	
	}

	public searchUsers(){
		console.log(this.userFilter);
	}

	public exportToExcel(){
		console.log('Exportando a Excel');
	}

}