import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html'
})
export class InicioComponent implements OnInit {
window: any;
  constructor() { }

  ngOnInit() {
    this.window = window.scroll(0,0);
  }

}
