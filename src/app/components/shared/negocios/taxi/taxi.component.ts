import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taxi',
  templateUrl: './taxi.component.html'
})
export class TaxiComponent implements OnInit {
window: any;
  constructor() { }

  ngOnInit() {
    this.window = window.scroll(0,0);
  }

}
