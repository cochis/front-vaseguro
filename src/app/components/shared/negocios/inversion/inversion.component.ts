import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inversion',
  templateUrl: './inversion.component.html'
})
export class InversionComponent implements OnInit {
  window: any;
  constructor() { }

  ngOnInit() {
    this.window = window.scroll(0,0);
  }

}
