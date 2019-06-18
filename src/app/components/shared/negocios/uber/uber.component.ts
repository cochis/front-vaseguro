import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uber',
  templateUrl: './uber.component.html'
})
export class UberComponent implements OnInit {
  window: any;
  constructor() { }

  ngOnInit() {
    this.window = window.scroll(0, 0);
  }

}
