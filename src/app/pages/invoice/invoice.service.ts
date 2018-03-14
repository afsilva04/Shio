import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Global } from '../global';

@Injectable()
export class InvoiceService{
    public url:string;
    
    constructor(
        private _http:Http
    ){
        this.url = Global.url;
    }

    getInvoiceInfo(id){
        return this._http.get(this.url + 'invoice/' + id).map(res => res.json());
    }
    
}