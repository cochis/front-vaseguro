import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  public display: Boolean = false;
  public init: any;
  public cotizacion: Boolean;
  
  constructor() { 
    
  }

  ngOnInit() {
 
      this.display = true;
    
    
  }

  showDialog() {
    // localStorage.setItem('init', false);
    
   
  }
  cotiza() {
    // localStorage.setItem('init', false);
    this.display = false;
  }
  noCotiza() {
    // localStorage.setItem('init', false);
    this.display = false;
    
  }
  setLocal(key , value) {
    localStorage.setItem(key, value);
  }
  getLocal(key) {
    localStorage.getItem(key);
  }

}
