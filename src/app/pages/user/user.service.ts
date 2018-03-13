import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Global } from '../global';

@Injectable()
export class UserService{
    public url:string;
    private isUserLoggedIn;

    constructor(
        private _http:Http
    ){
        this.url = Global.url;
        this.isUserLoggedIn = false;
    }

    setUserLoggedIn(){
        this.isUserLoggedIn = true;
    }

    getUserLoggedIn(){
        return this.isUserLoggedIn;
    }

    getUsers(){
        //return this._http.get(this.url+'users').map(res => res.json());
    }
}