import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TematicasComponent } from './pages/component/tematicas/tematicas.component';
import { FormularioTematicasComponent } from './pages/component/tematicas/formulario-tematicas/formulario-tematicas.component';

const routes: Routes = [

  {path:'tematicas', component: TematicasComponent},
  { path:'formulario-tematicas', component:FormularioTematicasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
