// local-storage.service.ts

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tematicas } from '../model/tematicas';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private claveLocalStorage = 'miArreglo4';
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
    const tematicasString = localStorage.getItem('miArray');
    return tematicasString ? JSON.parse(tematicasString) : [];
  }

  guardarEnLocalStorage(datos: any):void{
   // Obtener el array existente del localStorage
let existingArrayString = localStorage.getItem('miArray');
let existingArray: any[] = [];

try {
  // Si existe una cadena, parsearla como JSON
  existingArray = JSON.parse(existingArrayString || '[]');
} catch (error) {
  console.error('Error al parsear JSON:', error);
}

// Ahora puedes trabajar con existingArray como un array normal
existingArray.push(datos);

// Guardar el array actualizado en el localStorage
localStorage.setItem('miArray', JSON.stringify(existingArray));
}
}