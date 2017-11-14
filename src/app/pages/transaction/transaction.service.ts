import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Global } from '../global';

@Injectable()
export class TransactionService{
    public url:string;

    constructor(
        private _http:Http
    ){
        this.url = Global.url;
    }

    getTransaction(id){
        //return this._http.get(this.url+'transaction/'+this.id).map(res => res.json());
    }

    setTransaction(id){
        //post
    }

    getTransactions(){
        //return this._http.get(this.url+'transactions').map(res => res.json());
    }
}