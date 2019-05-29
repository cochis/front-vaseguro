import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styles: []
})
export class PromotionsComponent implements OnInit {

  constructor() { }
  window:any;
  ngOnInit() {
    this.window = window.scroll(0,0);
  }

}
