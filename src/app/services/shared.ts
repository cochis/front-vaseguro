import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class SharedService {

    getLocal(item) {
        let item2 = JSON.parse(localStorage.getItem(item));
        return item2;
      }

      setLocal(item) {
        localStorage.setItem('empleado', JSON.stringify(item));
      }
  }
