import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Global } from '../global';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';

@Injectable()
export class UserService{
    public url:string;
    private isUserLoggedIn;

    constructor(
        private _http:Http
    ){
        this.url = Global.url;
        this.isUserLoggedIn = false;
    }

    login(credentials){
        let params = JSON.stringify(credentials);
        let headers = new Headers({'Content-Type':'application/json'});

        return this._http.post(this.url + 'users/login', params, {headers: headers})
        .map(res => {
            let result = res.json();
            if(result && result.token != null) {
                localStorage.setItem('token', result.token);
                return true;
            }
            return false;
        });
    }

    logout(){
        localStorage.removeItem('token');
        //this.router.navigate(['/login']);
    }

    isLoggedIn(){
        return tokenNotExpired('token');
    }

    get currentUser(){
        let token = localStorage.getItem('token');
        if(!token || token == null) return null;
        return new JwtHelper().decodeToken(token);
    }

    getUsers(){
        //return this._http.get(this.url+'users').map(res => res.json());
    }
}