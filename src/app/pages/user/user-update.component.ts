import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from './user.model';

@Component({
	selector: 'user-update',
	templateUrl: './user-form.component.html'
	})
export class UserUpdateComponent{
	public title:string;
	public parametro:string;
	public user:User;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router
		){
		this.title = 'Modificar Usuario';
		this.user = new User ('', '', '', '', '', '', '', '', false);
	}

	ngOnInit(){
		this._route.params.forEach((params: Params) => {
			this.parametro = params['id'];
		});
		console.log(this.parametro);
	}

	createUser(){
		console.log(this.user);
	}
}