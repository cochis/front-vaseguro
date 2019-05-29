import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html'
})
export class AutosComponent implements OnInit {
window:any;
  constructor() { }

  ngOnInit() {
    this.window = window.scroll(0,0);
  }

}
