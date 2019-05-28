import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/components/common/api';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
@Component({
  selector: 'app-products',
  providers: [MessageService],
  templateUrl: './products.component.html'
})
export class ProductsComponent {
 
  aseguradoras: Aseguradora[];
  negocios: any;
  constructor(private messageService: MessageService) {
    
  }
 
  ngOnInit() {
  }
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



