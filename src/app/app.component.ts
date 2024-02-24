import { Component } from '@angular/core';
import { Tematicas } from './model/tematicas';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from './services/local-storage.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formtema:FormGroup= this.fb.group({
    id:'',
    nombre:''
  })
  tematicas:Tematicas[] = [];
  nuevoRegistro: any;
  tema:any;


constructor(public localStorage:LocalStorageService,public fb:FormBuilder){}

/*ngOnInit(){
  console.log('listarTema',this.tematicas);
}*/

ngOnInit() {
 // Obtén el arreglo desde LocalStorage al iniciar
 this.tematicas= this.localStorage.obtenerDesdeLocalStorage() || [];

 // También puedes establecer un escucha para cambios en el formulario
 this.formtema.valueChanges.subscribe(() => {
   // Puedes realizar acciones adicionales aquí si es necesario
 });

  /*const datosGuardados = localStorage.getItem('prueba3');
  if (datosGuardados) {
    
   
this.formtema.setValue(JSON.parse(datosGuardados));
  }
  this.guardarEnLocalStorage();*/

}

onSubmit(){
  if (this.formtema.valid) {
    const nuevaEntrada = this.formtema.value;
    this.tematicas.push(nuevaEntrada);

    // Guarda el arreglo en LocalStorage
    this.localStorage.guardarEnLocalStorage(this.tematicas);

    // Limpia el formulario
    this.formtema.reset();
  }
}
}



/*guardarRegistro(tema:any) {
  if (this.nuevoRegistro && this.nuevoRegistro.trim) {
    const trimmedValue = this.nuevoRegistro.trim();

    if (trimmedValue !== '') {
      
    
this.tematicas.push(trimmedValue);
      
    
this.nuevoRegistro = ''; // Limpiar el campo después de guardar

      

    


// Guardar registros en el almacenamiento local
      
      
this.localStorage.saveData('prueba9', tema.value);
console.log('localstore',this.tema);
    }
  }
}*/
/*
guardarEnLocalStorage() {
  // Guardar el valor del formulario en el localStorage

localStorage.setItem('prueba3', JSON.stringify(this.formtema.value));
}

// Otros métodos y lógica del componente
}
*/






