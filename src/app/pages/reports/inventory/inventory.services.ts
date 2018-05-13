import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Global } from '../../global';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class InventoryService{
    public url:string;

    constructor(
        private _http:AuthHttp
    ){
        this.url = Global.url;
    }

    getInventory(){
        return this._http.get(this.url + 'inventory').map(res => res.json());
    }

    addQuantity(product, subsidiary, quantity){
        let headers = new Headers({'Content-Type':'application/json'});
        return this._http.post(this.url + 'inventory/add/' + product + '/' + subsidiary + '/' + quantity, null, {headers: headers})
            .map(res => res.json());
    }

    substractQuantity(product, subsidiary, quantity){
        let headers = new Headers({'Content-Type':'application/json'});
        return this._http.post
            (this.url + 'inventory/substract/' + product + '/' + subsidiary + '/' + quantity, null, {headers: headers})
            .map(res => res.json());
    }

    substractInventoryByTransaction(transaction){
        let headers = new Headers({'Content-Type':'application/json'});
        return this._http.post(this.url + 'inventory/substract/' + transaction, null, {headers: headers});
    }

    addInventoryByTransaction(transaction){
        let headers = new Headers({'Content-Type':'application/json'});
        return this._http.post(this.url + 'inventory/add/' + transaction, null, {headers: headers});
    }

    addInventoryByEntry(entry){
        let headers = new Headers({'Content-Type':'application/json'});
        return this._http.post(this.url + 'inventory/add-by-entry/' + entry, null, {headers: headers});
    }

}