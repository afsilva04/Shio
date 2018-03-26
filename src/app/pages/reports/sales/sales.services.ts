import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Global } from '../../global';

@Injectable()
export class SalesService{
    public url:string;

    constructor(
        private _http:Http
    ){
        this.url = Global.url;
    }

    getSalesReport(){
        return this._http.get(this.url + 'reports/sales').map(res => res.json());
    }

}