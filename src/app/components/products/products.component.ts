import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/components/common/api';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
@Component({
  selector: 'app-products',
  providers: [MessageService],
  templateUrl: './products.component.html',
  styles: [`
        .ui-grid-row {
            text-align: center;
        }
        .ui-grid {
            margin: 10px 0px;
        }
        .ui-grid-row > div {
            padding: 4px 10px;
        }
    `]
})
export class ProductsComponent {
  cars: Car[];
  aseguradoras: Aseguradora[];
  negocios: any;
  constructor(private messageService: MessageService) {
    this.aseguradoras = [
      {
        nombre: 'AXA', negocios: [
          {
            nombre: 'Autos', productos: [
              { nombre: 'RC', tipo: 'completa' },
              { nombre: 'RC', tipo: 'completa' }
            ]
          }
        ]
      }
    ];
    this.cars = [
      { vin: 'r3278r2', year: 2010, brand: 'Audi', color: 'Black' },
      { vin: 'jhto2g2', year: 2015, brand: 'BMW', color: 'White' },
      { vin: 'h453w54', year: 2012, brand: 'Honda', color: 'Blue' },
      { vin: 'g43gwwg', year: 1998, brand: 'Renault', color: 'White' },
    ];
  }
  selectCar(car: Car) {
    this.messageService.add({ severity: 'info', summary: 'Car Selected', detail: 'Vin:' + car.vin });
  }
}

interface Car {
  vin: string;
  year: number;
  brand: string;
  color: string;
}
interface Aseguradora {
  nombre: string;
  negocios: Negocio[];
}

interface Negocio {
  nombre: string;
  productos: Producto[];
}
interface Producto {
  nombre: string;
  tipo: string;
}



