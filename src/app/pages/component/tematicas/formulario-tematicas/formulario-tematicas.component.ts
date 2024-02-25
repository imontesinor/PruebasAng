import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { tematicas_mock } from 'src/app/mock/mock';
import { Tematicas } from 'src/app/model/tematicas';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ModalComponent } from '../../modal/modal.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-formulario-tematicas',
  templateUrl: './formulario-tematicas.component.html',
  styleUrls: ['./formulario-tematicas.component.css']
})
export class FormularioTematicasComponent {
  //  tematicas:Tematicas[]=tematicas_mock
  temasticas: [] = [];
  tematica: any;
  @Input() temareci : any;
  @Output() eventema = new EventEmitter<any>();
  

  tematicaForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    color1: ['', Validators.required],
    color2: ['', Validators.required],
  });;


  constructor(public dialogRef: MatDialogRef<ModalComponent>, private fb: FormBuilder, public dialog: MatDialog, public localStorage: LocalStorageService,public route:Router,actir:ActivatedRoute) {


  }
 

  onSubmit() {
this.guardarTematica(this.tematicaForm);
  }
  eventoFormulario() {
    let p= this.eventema.emit(this.tematica);
    console.log('envioEvento', p)
  }
  guardarTematica(tema:any):void{
    if (this.tematicaForm.valid) {
  
      this.localStorage.guardarEnLocalStorage(tema.value);
      this.eventoFormulario();
      this.tematicaForm.reset();
      
    }
  }
  
  ngOnChanges(){
    if(this.temareci){
    this.tematicaForm.patchValue(this.temareci);
    }else{
        this.tematica= new Tematicas;
    }
}



 /* openModal(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '400px',
      data: { formulario: this.tematicaForm.value }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo se cerró');
    });

  }*/


}



