import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Client } from './client.model' ;
import { Global } from '../global';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class ClientService{
    public url:string;

    constructor(
        private _http:AuthHttp
    ){
        this.url = Global.url;
    }

    getAllClients(){
        return this._http.get(this.url + 'clients').map(res => res.json());
    }

    getClients(text?){
        console.log(this.url + 'clients/search?search_txt=' + text);
        return this._http.get(this.url + 'clients/search?search_txt=' + text).map(res => res.json());
    }

    getClient(id){
        return this._http.get(this.url + 'clients/' + id).map(res => res.json());
    }

    updateClient(client:Client){
        let params = JSON.stringify(client);
        let headers = new Headers({'Content-Type':'application/json'});

        return this._http.put(this.url + 'clients', params, {headers: headers})
        .map(res => res.json());
    }

	addClient(client:Client){
		let params = JSON.stringify(client);
		let headers = new Headers({'Content-Type':'application/json'});

		return this._http.post(this.url + 'clients', params, {headers: headers})
				   .map(res => res.json());
    }    
    
}