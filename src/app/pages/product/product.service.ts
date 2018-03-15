import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Global } from '../global';

@Injectable()
export class ProductService{
    public url:string;

    constructor(
        private _http:Http
    ){
        this.url = Global.url;
    }

    getProducts(){
        return this._http.get(this.url + 'products').map(res => res.json());
    }

}