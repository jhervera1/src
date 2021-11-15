import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Personaje } from 'src/app/Interface/dbz.interface';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {


  personajes:Personaje[] = [];
  nombreNuevoPersonaje:string = "";
  poderNuevoPersonaje:number = 0;
  personaje: Personaje = {
    nombre:"",
    poder:0
  }
  constructor() {
    this.iniciatePersonajes();
   }

  ngOnInit(): void {
  }

  iniciatePersonajes():void{
    this.personajes.push({nombre:"Goku",poder:1000000000000000},{nombre:"Yamcha",poder:-1});
  }

  agregarPersonaje(data:Personaje){
    this.personajes.push(data);
  }
}


