import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Global } from '../global';
import { EntsalHeader } from 'app/pages/transaction/entsal-header.model';
import { EntsalItem } from 'app/pages/transaction/entsal-item.model';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class TransactionService{
    public url:string;

    constructor(
        private _http:AuthHttp
    ){
        this.url = Global.url;
    }

    getTransactions(){
        return this._http.get(this.url + 'transactions').map(res => res.json());
    }

    getTransaction(id){
        return this._http.get(this.url + 'transactions/' + id).map(res => res.json());
    }

    getTransactionItems(id){
        return this._http.get(this.url + 'transaction-items/' + id).map(res => res.json());
    }

    createTransaction(transaction: EntsalHeader){
        let params = JSON.stringify(transaction);
        let headers = new Headers({'Content-Type':'application/json'});

        return this._http.post(this.url + 'transactions', params, {headers: headers}).map(res => res.json());
    }

    createTransactionItem(transactionItem: EntsalItem){
        let params = JSON.stringify(transactionItem);
        let headers = new Headers({'Content-Type':'application/json'});

        return this._http.post(this.url + 'transaction-items', params, {headers: headers}).map(res => res.json());
    }

    updateTransaction(transaction: EntsalHeader){
        let params = JSON.stringify(transaction);
        let headers = new Headers({'Content-Type':'application/json'});

        return this._http.put(this.url + 'transactions', params, {headers: headers}).map(res => res.json());
    }

    updateTransactionItem(transactionItem: EntsalItem){
        let params = JSON.stringify(transactionItem);
        let headers = new Headers({'Content-Type':'application/json'});

        return this._http.put(this.url + 'transaction-items', params, {headers: headers}).map(res => res.json());
    }

    deleteTransactionItem(id){
        return this._http.delete(this.url + 'transaction-items/' + id);
    }

    generateItemCoupons(id){
        let headers = new Headers({'Content-Type':'application/json'});
        return this._http.post(this.url + 'transactions/coupon/' + id, null, {headers: headers}).map(res => res.json());
    }

    getActiveCoupons(){
        return this._http.get(this.url + 'transaction-coupons/active').map(res => res.json());        
    }

    createTransactionCoupon(coupon){
        let params = JSON.stringify(coupon);
        let headers = new Headers({'Content-Type':'application/json'});

        return this._http.post(this.url + 'transaction-coupons', params, {headers: headers}).map(res => res.json());
    }

    getTransactionCoupons(transaction){
        return this._http.get(this.url + 'transaction-coupons/' + transaction).map(res => res.json());        
    }

    generateCoupons(id){
        let headers = new Headers({'Content-Type':'application/json'});
        return this._http.post(this.url + 'coupons/generate/' + id, null, {headers: headers});
    }

    getValidCoupons(){
        return this._http.get(this.url + 'coupons/available').map(res => res.json());                
    }

    substractByTransaction(transaction){
        let headers = new Headers({'Content-Type':'application/json'});
        return this._http.post(this.url + 'coupons/substract/' + transaction, null, {headers: headers});
    }

    confirmTransaction(transaction){
        let headers = new Headers({'Content-Type':'application/json'});
        return this._http.post(this.url + 'transactions/confirm/' + transaction, null, {headers: headers}).map(res => res.json());
    }

}