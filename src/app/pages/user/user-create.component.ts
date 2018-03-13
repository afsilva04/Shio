import { Component } from '@angular/core';
import { User } from './user.model';

@Component({
	selector: 'user-create',
	templateUrl: './user-form.component.html'
	})
export class UserCreateComponent{
	public title:string;
	public user:User;

	constructor(){
		this.title = 'Crear Usuario';
		this.user = new User ('', '', '', '', '', '', '', '', true);
	}

	createUser(){
		console.log(this.user);
	}
}