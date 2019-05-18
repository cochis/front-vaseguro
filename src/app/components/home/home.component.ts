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
    
    this.cotizacion = localStorage.getItem('init');
   console.log(this.cotizacion); // true

  // console.log(typeof locura); // 'string'
  //   this.cotizacion = this.getLocal('init');
    
      // console.log(this.cotizacion);
      // console.log(JSON.stringify(locura));
    if(this.cotizacion){
      this.display = true;
    }else {
      this.display= false;

    }
    
  }

  showDialog() {
    localStorage.setItem('init', false);
    
    // if (this.getLocal('init') === true ) {
    //   this.display = true;
    //   this.setLocal('init', this.init);
    // }
  }
  cotiza() {
    localStorage.setItem('init', false);
    this.display = false;
  }
  noCotiza() {
    localStorage.setItem('init', false);
    this.display = false;
    
  }
  setLocal(key , value) {
    localStorage.setItem(key, value);
  }
  getLocal(key) {
    localStorage.getItem(key);
  }

}
