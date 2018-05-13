import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Global } from '../global';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class CompanyService{
    public url:string;

    constructor(
        private _http:AuthHttp
    ){
        this.url = Global.url;
    }

    getCompanies(){
        return this._http.get(this.url + 'companies').map(res => res.json());
    }

}