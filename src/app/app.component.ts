import { Component, OnInit } from '@angular/core';
import { SharedService } from './services/shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'V@ Seguro';
  public usuario: any;
  public token: any;
  public logueado: Boolean;
  constructor(private _sharedService: SharedService) { }

  ngOnInit() {
    this.usuario = this._sharedService.getSession('usuario');
    this.token = this._sharedService.getSession('token');
   
    if (this.usuario  && this.token) {
        this.logueado = true;
    } else {
      this.logueado = false;
    }


  }
}


