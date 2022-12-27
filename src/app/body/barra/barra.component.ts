import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent  implements OnInit {
   

  @Input() nombrebarra:string='sin nombre'
  @Output() cambiarNombrebarra = new EventEmitter<string>();


  constructor(){}

  ngOnInit() {  
  }
  cambiarNombre(){
    this.nombrebarra ="juan lechuga";
    this.cambiarNombrebarra.emit(this.nombrebarra);
  }

 }


