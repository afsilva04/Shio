import { Component } from '@angular/core';
import { User } from './user.model';
//import { Ng2SmartTableModule } from 'ng2-smart-table';

@Component({
	selector: 'user-list',
	templateUrl: './user-list.component.html'
	})
export class UserListComponent{
	public title:string;
	public users:User[];
	
	constructor(){
		this.title = 'Lista de Usuarios';
	}

	ngOnInit(){
		let user1 = new User ('1', 'Andres', 'andres@gmail.com', '3329155', 'rol1', 'sucursal1', 'pass', 'pass');
		let user2 = new User ('2', 'Jessi', 'jessi@gmail.com', '3334455', 'rol2', 'sucursal2', 'pass', 'pass');
		let user3 = new User ('3', 'Juan', 'juan@gmail.com', '5560098', 'rol1', 'sucursal1', 'pass', 'pass');
		this.users = [ user1, user2, user3 ];
		console.log(this.users);
	}
}