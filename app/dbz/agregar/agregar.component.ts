import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from 'src/app/Interface/dbz.interface';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  @Input() personajes:Personaje[] = [];
  personaje: Personaje = {nombre:"",poder:0};
  @Output() onNuevoPersonaje:EventEmitter<Personaje> = new EventEmitter();
  constructor() { }

  ngOnInit(): void { }

  addPersonaje():void{

    if(this.personaje.nombre.trim().length == 0){
      return;
    }
    let personaje: Personaje = this.personaje;
    this.onNuevoPersonaje.emit(personaje);


  }

}
