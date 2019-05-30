import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camiones',
  templateUrl: './camiones.component.html'
})
export class CamionesComponent implements OnInit {
window:any;
  constructor() { }

  ngOnInit() {
    this.window = window.scroll(0,0);
  }

}
