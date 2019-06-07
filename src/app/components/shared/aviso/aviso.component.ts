import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aviso',
  templateUrl: './aviso.component.html'
})
export class AvisoComponent implements OnInit {
  selectedCities: string[] = [];

  selectedCategories: string[] = ['Technology', 'Sports'];

  checked: any;
  constructor() { }

  ngOnInit() {
  }
  onSubmit(form){
    console.log(form.value);
    
  }

}
