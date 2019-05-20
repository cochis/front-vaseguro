import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  getLocal(key: any) {
    const item = JSON.parse(localStorage.getItem(key));
    return item;
  }

  setLocal(key: any, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  getSession(key: any) {
    const item = JSON.parse(sessionStorage.getItem(key));
    return item;
  }

  setSession(key: any, value: any) {
    console.log('set ' + key);
    sessionStorage.setItem(key, JSON.stringify(value));
  }
}
