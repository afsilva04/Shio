import { Component } from '@angular/core';
import { User } from './user.model';

@Component({
	selector: 'user-create',
	templateUrl: './user-create.component.html'
	})
export class UserCreateComponent{
	public title:string;
	public user:User;

	constructor(){
		this.title = 'Crear Usuario';
		this.user = new User ('', '', '', '', '', '', '', '');
	}

	onSubmit(){
		console.log(this.user);
	}
}