import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Global } from '../global';

@Injectable()
export class SubsidiaryService{
    public url:string;

    constructor(
        private _http:Http
    ){
        this.url = Global.url;
    }

    getAllSubsidiaries(){
        return this._http.get(this.url + 'subsidiaries').map(res => res.json());
    }

}