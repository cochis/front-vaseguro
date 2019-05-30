import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tractocamiones',
  templateUrl: './tractocamiones.component.html'
})
export class TractocamionesComponent implements OnInit {
window: any;
  constructor() { }

  ngOnInit() {
    this.window = window.scroll(0,0);
  }

}
