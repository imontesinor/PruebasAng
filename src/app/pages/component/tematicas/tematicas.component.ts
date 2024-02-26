import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tematicas } from 'src/app/model/tematicas';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormularioTematicasComponent } from './formulario-tematicas/formulario-tematicas.component';



@Component({
  selector: 'app-tematicas',
  templateUrl: './tematicas.component.html',
  styleUrls: ['./tematicas.component.css']
})
export class TematicasComponent {

  tematicas: Tematicas[] = [];
  tematica: any;







  constructor(public dialog: MatDialog, public localStorage: LocalStorageService, public route: Router, public activerouter: ActivatedRoute,) { }

  ngOnInit() {

    this.listarTematicas();



  }





  listarTematicas() {
    this.tematicas = this.localStorage.obtenerDesdeLocalStorage();
    console.log('obtenerTematica', this.tematicas);

  }





  abrirFormularioEnModal() {
    const dialogRef = this.dialog.open(FormularioTematicasComponent, {
      width: '800px',
    });

    dialogRef.componentInstance.eventema.subscribe((formulario: any) => {

      const tematicaFormControl = dialogRef.componentInstance.tematicaForm;

      formulario = tematicaFormControl.value;
      console.log('Tematica guardada:', this.tematica = formulario);
      dialogRef.close();
      this.listarTematicas();


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

  /*confirmarEliminacion(id:any) {
    console.log('seleccionid',id=this.tematica);
    var confirmacion = confirm("¿Estás seguro de que deseas eliminar este registro?");
    if (confirmacion) {
      this.localStorage.eliminarRegistro();
      alert("Registro eliminado correctamente.");
    } else {
      alert("Eliminación cancelada.");

    }
    this.listarTematicas();
  }*/

}



