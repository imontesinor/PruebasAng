import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tematicas } from 'src/app/model/tematicas';

@Component({
  selector: 'app-tematicas',
  templateUrl: './tematicas.component.html',
  styleUrls: ['./tematicas.component.css']
})
export class TematicasComponent {
  tematicas:Tematicas[]=[{
    id:0,
    'nombre': 'evento',
   
  }];

listarTematica(){
console.log('lista',this.tematicas)

}
constructor(public route:Router, public routerA:ActivatedRoute){}

irFormTematica(){
  this.route.navigate(['/formulario-tematicas']);
}


}


