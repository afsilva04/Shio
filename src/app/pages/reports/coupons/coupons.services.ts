import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Global } from '../../global';

@Injectable()
export class CouponsService{
    public url:string;

    constructor(
        private _http:Http
    ){
        this.url = Global.url;
    }

    getAvailableCoupons(){
        return this._http.get(this.url + 'coupons/available').map(res => res.json());
    }

}