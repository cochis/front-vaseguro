import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hogar',
  templateUrl: './hogar.component.html'
})
export class HogarComponent implements OnInit {
window: any;
  constructor() { }

  ngOnInit() {
    this.window = window.scroll(0,0);
  }

}
