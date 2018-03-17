import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Global } from '../global';

@Injectable()
export class CompanyService{
    public url:string;

    constructor(
        private _http:Http
    ){
        this.url = Global.url;
    }

    getCompanies(){
        return this._http.get(this.url + 'companies').map(res => res.json());
    }

}