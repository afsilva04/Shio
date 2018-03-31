import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Global } from '../global';
import { Appointment } from 'app/pages/appointment/appointment.model';
import { retry } from 'rxjs/operator/retry';
import { AppointmentItem, AppointmentItemCreate } from 'app/pages/appointment/appointment-item.model';

@Injectable()
export class AppointmentService{

    public url:string;
    
    constructor(
        private _http:Http
    ){
        this.url = Global.url;
    }

    getAppointment(id){
        return this._http.get(this.url + 'appointments/' + id).map(res => res.json());
    }    

    getAppointments(){
        return this._http.get(this.url + 'appointments').map(res => res.json());
    }

    getAppointmentItems(id){
        return this._http.get(this.url + 'appointment-items/' + id).map(res => res.json());
    }

    getAllAppointmentItems(){
        return this._http.get(this.url + 'appointment-items/').map(res => res.json());        
    }

    createAppointment(appointment: Appointment){
        let params = JSON.stringify(appointment);
        let headers = new Headers({'Content-Type':'application/json'});

        return this._http.post(this.url + 'appointments', params, {headers: headers}).map(res => res.json());
    }   

    updateAppointment(appointment: Appointment){
        let params = JSON.stringify(appointment);
        let headers = new Headers({'Content-Type':'application/json'});

        return this._http.put(this.url + 'appointments', params, {headers: headers}).map(res => res.json());
    }   

    createAppointmentItem(item: AppointmentItemCreate){
        let params = JSON.stringify(item);
        let headers = new Headers({'Content-Type':'application/json'});

        return this._http.post(this.url + 'appointment-items', params, {headers: headers}).map(res => res.json());
    }

    updateAppointmentItem(item: AppointmentItem){
        let params = JSON.stringify(item);
        let headers = new Headers({'Content-Type':'application/json'});

        return this._http.put(this.url + 'appointment-items', params, {headers: headers}).map(res => res.json());
    }

    deleteAppointmentItem(id){
        return this._http.delete(this.url + 'appointment-items/' + id);
    }

    createTransaction(id){
        let headers = new Headers({'Content-Type':'application/json'});
        return this._http.post(this.url + 'appointments/transaction/' + id, null, {headers: headers}).map(res => res.json());
    }

}