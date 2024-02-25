import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {


  constructor(public dialogRef: MatDialogRef<ModalComponent>, private fb: FormBuilder) {


   }

  cerrarModal() {
    this.dialogRef.close();
  }

  /*recibirFormulario(formulario: FormGroup) {

    const datosGuardados = JSON.parse(this.localstorage.obtenerDesdeLocalStorage());

  console.log('obtenerdatos',datosGuardados)
    datosGuardados.push(formulario.value);
    localStorage.setItem('datos', JSON.stringify(datosGuardados));

    // Puedes realizar acciones adicionales aquí

    // Cerrar el modal después de manejar el formulario
    this.cerrarModal();


}*/

onSubmit() {

}


}
