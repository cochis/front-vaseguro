import { Component, OnInit } from '@angular/core';
import { FastCotizacion } from '../../models/fastCotizacion';
import { ContactoService } from '../../services/contacto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  public display: Boolean = false;
  public init: any;
  public cotizacion: Boolean;
  public fastCotizacion: FastCotizacion;
  public status: String;
  public msgs: any;
  window:any;
  constructor(private _contactoService: ContactoService) {
    this.fastCotizacion = new FastCotizacion('', 0, '', 0, '', '', false, false, false);

  }
  ngOnInit() {
    this.window = window.scroll(0,0);
    this.init = sessionStorage.getItem('cotizado');
    if (!this.init) {
      this.display = true;
    } else {
      this.display = false;
    }

  }
  showDialog() {
  }
  cotiza() {
    this.display = false;
    
  }
  noCotiza() {
    this.display = false;
    sessionStorage.setItem('cotizado', 'true');
  }
  setLocal(key, value) {
    localStorage.setItem(key, value);
  }
  getLocal(key) {
    localStorage.getItem(key);
  }
  onSubmit(form) {
    this._contactoService.sendFast(this.fastCotizacion).subscribe(
      response => {
        console.log(response);
        if (response) {
          this.status = 'success';
          form.reset();
          this.showSuccess();
          sessionStorage.setItem('cotizado', 'true');
        } else {
          this.status = 'failed';
          this.showError();
        }

      },
      error => {
        console.log(error);
        this.showError();
      }
    );
  }
  showSuccess() {
    this.msgs = [];
    this.msgs.push({ severity: 'success', summary: this.fastCotizacion.version, detail: 'Su mensaje ha sido enviado' });
  }
  showError() {
    this.msgs = [];
    this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
  }

}