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

    createInvoice(invoiceSat){
        let params = JSON.stringify(invoiceSat);
        let headers = new Headers({'Content-Type':'application/json'});

        return this._http.post(this.url + 'invoice', params, {headers: headers}).map(res => res.json());
    }

    updateTransaction(invoiceSatUpdate){
        let params = JSON.stringify(invoiceSatUpdate);
        let headers = new Headers({'Content-Type':'application/json'});

        return this._http.put(this.url + 'invoice', params , {headers: headers}).map(res => res.json());
    }
    
}