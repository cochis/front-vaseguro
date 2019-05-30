import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taxi-uber',
  templateUrl: './taxi-uber.component.html'
})
export class TaxiUberComponent implements OnInit {
window: any;
  constructor() { }

  ngOnInit() {
    this.window = window.scroll(0,0);
  }

}
