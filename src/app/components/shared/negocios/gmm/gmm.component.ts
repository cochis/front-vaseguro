import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gmm',
  templateUrl: './gmm.component.html'
})
export class GmmComponent implements OnInit {
  window: any;
  constructor() { }

  ngOnInit() {
    this.window = window.scroll(0,0);
  }

}
