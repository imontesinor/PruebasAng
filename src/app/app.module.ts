import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TematicasComponent } from './pages/component/tematicas/tematicas.component';
import { FormularioTematicasComponent } from './pages/component/tematicas/formulario-tematicas/formulario-tematicas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ModalComponent } from './pages/component/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    TematicasComponent,
    AppComponent,
    FormularioTematicasComponent,
    ModalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    //BrowserAnimationsModule,
  //  MatButtonModule,
    MatInputModule,
    MatDialogModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
