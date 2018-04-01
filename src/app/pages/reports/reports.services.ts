import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Global } from '../global';

@Injectable()
export class ReportService{
    public url:string;

    constructor(
        private _http:Http
    ){
        this.url = Global.url;
    }

    getSalesReport(){
        return this._http.get(this.url + 'reports/sales').map(res => res.json());
    }

    getAppointmentsReport(){
        return this._http.get(this.url + 'reports/appointments').map(res => res.json());
    }

    getCloseReport(){
        return this._http.get(this.url + 'reports/close').map(res => res.json());
    }

    getDayReport(){
        return this._http.get(this.url + 'reports/day').map(res => res.json());
    }

}