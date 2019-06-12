import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vida',
  templateUrl: './vida.component.html'
})
export class VidaComponent implements OnInit {
window: any;
  constructor() { }

  ngOnInit() {
    this.window = window.scroll(0,0);
  }

}
