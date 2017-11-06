import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService{
    public url:string;

    constructor(
        private _http:Http
    ){
        this.url = 'https://localhost:8080/';
    }

    getUsers(){
        //return this._http.get(this.url+'users').map(res => res.json());
    }
}