import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pickup',
  templateUrl: './pickup.component.html'
})
export class PickupComponent implements OnInit {
window:any;
  constructor() { }

  ngOnInit() {
    this.window = window.scroll(0,0);
  }

}
