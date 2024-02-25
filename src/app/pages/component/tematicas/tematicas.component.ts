import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tematicas } from 'src/app/model/tematicas';
import { LocalStorageService } from 'src/app/services/local-storage.service';
//import { tematicas_mock } from 'src/app/mock/mock';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { FormularioTematicasComponent } from './formulario-tematicas/formulario-tematicas.component';
//import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-tematicas',
  templateUrl: './tematicas.component.html',
  styleUrls: ['./tematicas.component.css']
})
export class TematicasComponent {

 // tematicas: Tematicas[] = tematicas_mock;
 tematicas: Tematicas[] = [];
  nuevoRegistro: any;
  tematica:any;
  mostrarForm=false;
  mostrarModal: boolean | undefined;
  



  constructor(public dialog: MatDialog,public localStorage: LocalStorageService, public fb: FormBuilder, public route: Router, public activerouter: ActivatedRoute) { }

  ngOnInit() {

    this.listarTematicas();

    

  }

 

  listarTematicas(){
    this.tematicas = this.localStorage.obtenerDesdeLocalStorage();
    console.log('obtenerTematica',this.tematicas);
    this.mostrarModal = false; 
  }




  // irFormTematica() {
  //   this.route.navigate(['/formulario-tematicas']);
  // }

  abrirFormularioEnModal() {
    const dialogRef = this.dialog.open(FormularioTematicasComponent, {
      width: '800px',
    });

    dialogRef.componentInstance.eventema.subscribe((formulario: any) => {
      console.log('Formulario enviado desde el modal:', this.tematica= formulario);
     dialogRef.close();
    });
  }

  combineColors(color1: string, color2: string): string {
    const rgb1 = this.hexToRgb(color1);
    const rgb2 = this.hexToRgb(color2);

    const combinedColor = {
      r: Math.round((rgb1.r + rgb2.r) / 2),
      g: Math.round((rgb1.g + rgb2.g) / 2),
      b: Math.round((rgb1.b + rgb2.b) / 2),
    };

    return `rgb(${combinedColor.r}, ${combinedColor.g}, ${combinedColor.b})`;
  }

  hexToRgb(hex: string): { r: number; g: number; b: number } {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return { r, g, b };
  }

}



