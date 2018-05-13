import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Global } from '../global';
import { Entry, EntryItem } from 'app/pages/entry/entry.model';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class EntryService{
    public url:string;

    constructor(
        private _http:AuthHttp
    ){
        this.url = Global.url;
    }

    getAllEntries(){
        return this._http.get(this.url + 'entries').map(res => res.json());
    }

    getEntry(id){
        return this._http.get(this.url + 'entries/' + id).map(res => res.json());        
    }

    createEntry(entry: Entry){
        let params = JSON.stringify(entry);
        let headers = new Headers({'Content-Type':'application/json'});

        return this._http.post(this.url + 'entries', params, {headers: headers}).map(res => res.json());
    }

    updateEntry(entry: Entry){
        let params = JSON.stringify(entry);
        let headers = new Headers({'Content-Type':'application/json'});

        return this._http.put(this.url + 'entries', params, {headers: headers}).map(res => res.json());
    }

    getEntryItems(idEntry){
        return this._http.get(this.url + 'entry-items/' + idEntry).map(res => res.json());                
    }

    createEntryItem(entryItem: EntryItem){
        let params = JSON.stringify(entryItem);
        let headers = new Headers({'Content-Type':'application/json'});

        return this._http.post(this.url + 'entry-items', params, {headers: headers}).map(res => res.json());
    }

    updateEntryItem(entryItem: EntryItem){
        let params = JSON.stringify(entryItem);
        let headers = new Headers({'Content-Type':'application/json'});

        return this._http.put(this.url + 'entry-items', params, {headers: headers}).map(res => res.json());
    }

    deleteEntryItem(id){
        return this._http.delete(this.url + 'entry-items/' + id);
    }

    confirmEntry(id){
        let headers = new Headers({'Content-Type':'application/json'});
        return this._http.post(this.url + 'entries/confirm/' + id, null, {headers: headers}).map(res => res.json());
    }

}