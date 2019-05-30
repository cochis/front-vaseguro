import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motos',
  templateUrl: './motos.component.html'
})
export class MotosComponent implements OnInit {
window: any;
  constructor() { }

  ngOnInit() {
    this.window = window.scroll(0,0);
  }

}
