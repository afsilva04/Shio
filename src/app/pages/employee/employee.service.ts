import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Global } from '../global';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class EmployeeService{
    public url:string;

    constructor(
        private _http:AuthHttp
    ){
        this.url = Global.url;
    }

    getAllEmployees(){
        return this._http.get(this.url + 'employees').map(res => res.json());
    }

}