import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/observable';
import { GLOBAL } from '../global';

@Injectable()
export class TransactionService{
    public url:string;

    constructor(
        private _http:Http
    ){
        this.url = GLOBAL.url;
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