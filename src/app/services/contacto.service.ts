import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Contacto } from '../models/contacto';
import { Global } from './global';
import { FastCotizacion } from '../models/fastCotizacion';


@Injectable({
    providedIn: 'root'
  })
export class ContactoService {
    public url: string;

    constructor(
        private _http: HttpClient
    ) {
        this.url = Global.url;
    }


    sendContacto(contacto: Contacto): Observable<any> {
        console.log(contacto);
        const params = JSON.stringify(contacto);
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        const slide = 'send-contacto/';
        console.log(this.url + slide);
        return this._http.post(this.url + slide , params, { headers: headers });
    }
    sendFast(fastCotizacion: FastCotizacion): Observable<any> {
        const params = JSON.stringify(fastCotizacion);
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        const slide = 'send-fast/';
        return this._http.post(this.url + slide , params, { headers: headers });
    }




}
