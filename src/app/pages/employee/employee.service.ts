import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Global } from '../global';

@Injectable()
export class EmployeeService{
    public url:string;

    constructor(
        private _http:Http
    ){
        this.url = Global.url;
    }

    getAllEmployees(){
        return this._http.get(this.url + 'employees').map(res => res.json());
    }

}