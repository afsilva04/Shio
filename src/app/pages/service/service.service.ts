import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Global } from '../global';
import { Service } from 'app/pages/service/service.model';

@Injectable()
export class ServiceService{
    public url:string;

    constructor(
        private _http:Http
    ){
        this.url = Global.url;
    }

    getService(id){
        return this._http.get(this.url + 'services/' + id).map(res => res.json());        
    }

    getServicesFilter(text?){
        return this._http.get(this.url + 'services/search?search_txt=' + text).map(res => res.json());
    }

    getServices(){
        return this._http.get(this.url + 'services').map(res => res.json());
    }

    createService(service:Service){
        let params = JSON.stringify(service);
        let headers = new Headers({'Content-Type':'application/json'});

        return this._http.post(this.url + 'services', params, {headers: headers}).map(res => res.json());
    }

    updateService(service:Service){
        let params = JSON.stringify(service);
        let headers = new Headers({'Content-Type':'application/json'});

        return this._http.put(this.url + 'services', params, {headers: headers}).map(res => res.json());
    }

}