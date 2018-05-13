import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Global } from '../global';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class SubsidiaryService{
    public url:string;

    constructor(
        private _http:AuthHttp
    ){
        this.url = Global.url;
    }

    getAllSubsidiaries(){
        return this._http.get(this.url + 'subsidiaries').map(res => res.json());
    }

}