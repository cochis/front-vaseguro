import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {
window: any;
  constructor() { }

  ngOnInit() {
    this.window = window.scroll(0,0);
  }

}
