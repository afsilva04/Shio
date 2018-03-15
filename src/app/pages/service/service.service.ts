import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Global } from '../global';

@Injectable()
export class ServiceService{
    public url:string;

    constructor(
        private _http:Http
    ){
        this.url = Global.url;
    }

    getServices(){
        return this._http.get(this.url + 'services').map(res => res.json());
    }

}