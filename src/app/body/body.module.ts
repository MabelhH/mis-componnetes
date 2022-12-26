import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenidoComponent } from './contenido/contenido.component';
import { BarraComponent } from './barra/barra.component';



@NgModule({
  declarations: [
    ContenidoComponent,
    BarraComponent,
   
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ContenidoComponent,
    BarraComponent
  ]
})
export class BodyModule { }
