import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyModule } from '../body/body.module';
import { HomeComponent } from './home/home.component';





@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    BodyModule
  ],
  exports:[
    HomeComponent
  ]
})
export class PagesModule { }
