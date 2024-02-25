import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TematicasComponent } from './pages/component/tematicas/tematicas.component';
import { FormularioTematicasComponent } from './pages/component/tematicas/formulario-tematicas/formulario-tematicas.component';
import { ModalComponent } from './pages/component/modal/modal.component';

const routes: Routes = [

  {path:'', component: TematicasComponent},
  
  { path:'formulario-tematicas', component:FormularioTematicasComponent},
  { path:'modal', component:ModalComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  constructor(){
  }
  
}
