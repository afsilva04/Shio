import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/observable';

@Injectable()
export class UserService{
    public url:string;

    constructor(
        private _http:Http
    ){
        this.url = 'https://';
    }

    getUsers(){
        //return this._http.get(this.url+'users').map(res => res.json());
    }
}