import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Global } from '../global';
import { Product } from './product.model';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class ProductService{
    public url:string;

    constructor(
        private _http:AuthHttp
    ){
        this.url = Global.url;
    }

    getProduct(id){
        return this._http.get(this.url + 'products/' + id).map(res => res.json());        
    }

    getProductsFilter(text?){
        return this._http.get(this.url + 'products/search?search_txt=' + text).map(res => res.json());
    }

    getProducts(){
        return this._http.get(this.url + 'products').map(res => res.json());
    }

    createProduct(product:Product){
        let params = JSON.stringify(product);
        let headers = new Headers({'Content-Type':'application/json'});

        return this._http.post(this.url + 'products', params, {headers: headers}).map(res => res.json());
    }

    updateProduct(product:Product){
        let params = JSON.stringify(product);
        let headers = new Headers({'Content-Type':'application/json'});

        return this._http.put(this.url + 'products', params, {headers: headers}).map(res => res.json());
    }

}