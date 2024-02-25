import { Component } from '@angular/core';
import { Tematicas } from './model/tematicas';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from './services/local-storage.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './pages/component/modal/modal.component';
import { FormularioTematicasComponent } from './pages/component/tematicas/formulario-tematicas/formulario-tematicas.component';
import { tematicas_mock } from 'src/app/mock/mock';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*formtema:FormGroup= this.fb.group({
    id:'',
    nombre:''
  })*/
  // tematicas:Tematicas[] = [];
  nuevoRegistro: any;
  tema: any;

  tematicas: Tematicas[] = tematicas_mock;



  constructor(public dialog: MatDialog, localStorage: LocalStorageService, public fb: FormBuilder, public route: Router, public activerouter: ActivatedRoute) { }

  abrirModal() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '800px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('El modal se cerró');
    });
  }




  ngOnInit() {
    // Obtén el arreglo desde LocalStorage al iniciar
    // this.tematicas= this.localStorage.obtenerDesdeLocalStorage() || [];

    // También puedes establecer un escucha para cambios en el formulario
    //this.formtema.valueChanges.subscribe(() => {
    // Puedes realizar acciones adicionales aquí si es necesario
    //});


  }

  /*onSubmit(){
    if (this.formtema.valid) {
      const nuevaEntrada = this.formtema.value;
      this.tematicas.push(nuevaEntrada);
  
      // Guarda el arreglo en LocalStorage
      this.localStorage.guardarEnLocalStorage(this.tematicas);
  
      // Limpia el formulario
      this.formtema.reset();
    }
  }*/

}
