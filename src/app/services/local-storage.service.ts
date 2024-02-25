// local-storage.service.ts

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tematicas } from '../model/tematicas';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private claveLocalStorage = 'miArreglo4';
  constructor() { }


  obtenerDesdeLocalStorage(): any[] {
    const tematicasString = localStorage.getItem('miArray');
    return tematicasString ? JSON.parse(tematicasString) : [];
  }

  guardarEnLocalStorage(datos: any): void {
    let existingArrayString = localStorage.getItem('miArray');
    let existingArray: any[] = [];

    try {

      existingArray = JSON.parse(existingArrayString || '[]');
    } catch (error) {
      console.error('Error al parsear JSON:', error);
    }
    existingArray.push(datos);
    localStorage.setItem('miArray', JSON.stringify(existingArray));
  }



}