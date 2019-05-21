import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';
import { Usuario } from '../models/usuario';
import { __values } from 'tslib';
import { SharedService } from './shared';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public url = Global.url;
  public logueado: boolean;
  public usuario: Usuario;
  public token: String;
  constructor(private _http: HttpClient,
    private _sharedService: SharedService) { }
    login(usuario) {
      return this._http.post(`${this.url}login`, usuario);
    }
    loginToken(usuario) {
      usuario.token = 'true';
      return this._http.post(`${this.url}login`, usuario);
    }
    
}
