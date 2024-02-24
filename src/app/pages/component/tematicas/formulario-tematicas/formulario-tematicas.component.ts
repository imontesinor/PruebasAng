import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tematicas } from 'src/app/model/tematicas';

@Component({
  selector: 'app-formulario-tematicas',
  templateUrl: './formulario-tematicas.component.html',
  styleUrls: ['./formulario-tematicas.component.css']
})
export class FormularioTematicasComponent {
  tematicas:Tematicas[]=[];
  tematica: Tematicas = new Tematicas();
  formTematica: FormGroup= this.fb.group({
    id:'',
    nombre:''
  });

  constructor(public fb:FormBuilder, public route:Router,public routeA:ActivatedRoute){

  }
  
  ngSubmit(){
  this.guardarTematica(this.formTematica);
  }
  guardarTematica(te:any){
   console.log( 'guardar');

  }
  ngOInit(){

  }

  irFormTematica(){
    this.route.navigate(['/formulario-tematicas']);
  }

}
