import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html'
})
export class ErrorComponent implements OnInit {
window:any;
  constructor() { }

  ngOnInit() {
    this.window = window.scroll(0,0);
  }

}
