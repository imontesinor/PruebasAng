// local-storage.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private claveLocalStorage = 'miArreglo';
  constructor() {}

  // Guardar datos en el almacenamiento local
  saveData(key: any, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  // Obtener datos del almacenamiento local
  getData(key: any): any {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  obtenerDesdeLocalStorage(): any[] {
    const datos = localStorage.getItem(this.claveLocalStorage);
    return datos ? JSON.parse(datos) : null;
  }

  guardarEnLocalStorage(datos: any[]) {
    localStorage.setItem(this.claveLocalStorage, JSON.stringify(datos));
  }
  
}
