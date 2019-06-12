import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../services/shared';

@Component({
  selector: 'app-aviso',
  templateUrl: './aviso.component.html'
})
export class AvisoComponent implements OnInit {
  selectedCities: string[] = [];

  selectedCategories: string[] = ['Technology', 'Sports'];

  checked: any;
  constructor(private _sharedService: SharedService) { }

  ngOnInit() {
  }
  onSubmit(aviso){
    console.log(aviso);
    this._sharedService.setLocal('aviso',aviso);
    

    
  }

}
