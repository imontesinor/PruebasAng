import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Tematicas } from 'src/app/model/tematicas';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ModalComponent } from '../../modal/modal.component';


@Component({
  selector: 'app-formulario-tematicas',
  templateUrl: './formulario-tematicas.component.html',
  styleUrls: ['./formulario-tematicas.component.css']
})
export class FormularioTematicasComponent {
  //  tematicas:Tematicas[]=tematicas_mock
  temasticas: [] = [];
  tematica: any;
  @Input() temareci: any;
  @Output() eventema = new EventEmitter<any>();


  tematicaForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    color1: ['', Validators.required],
    color2: ['', Validators.required],
  });;


  constructor(public dialogRef: MatDialogRef<ModalComponent>, private fb: FormBuilder, public dialog: MatDialog, public localStorage: LocalStorageService, public route: Router, actir: ActivatedRoute) {


  }



  onSubmit() {
    this.guardarTematica(this.tematicaForm);
  }

  eventoFormulario() {
    this.eventema.emit(this.tematica);

  }








  //volver a colocar  funcional
  guardarTematica(tema: any): void {
    var confirmar = confirm("¿Estás seguro de que deseas Guardar este registro?");

    if (this.tematicaForm.valid && confirmar) {
      this.localStorage.guardarEnLocalStorage(tema.value);
      alert("Registro Guardado correctamente.");
    }
    else {
      alert("accion cancelada.");
    }
    this.eventoFormulario();
    this.tematicaForm.reset();

  }








  ngOnChanges() {
    if (this.temareci) {
      this.tematicaForm.patchValue(this.temareci);
    } else {
      this.tematica = new Tematicas;
    }
  }





}



