import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {


  personajes:Personaje[] = [];
  nombreNuevoPersonaje:string = "";
  poderNuevoPersonaje:number = 0;

  constructor() {
    this.iniciatePersonajes();
   }

  ngOnInit(): void {
  }

  iniciatePersonajes():void{
    this.personajes.push(new Personaje("Goku",1000000000000000),new Personaje("Yamcha",-1));
  }

  addPersonaje():void{
    console.log(this.nombreNuevoPersonaje,this.poderNuevoPersonaje)
    this.personajes.push(new Personaje(this.nombreNuevoPersonaje,this.poderNuevoPersonaje));
  }

}

export class Personaje{
  private nombre:string = "";
  private poder:number = 0;

  constructor(nombre:string, poder:number){
    this.nombre = nombre;
    this.poder = poder;
  }

  setNombre(nombre:string):void{
    this.nombre = nombre;
  }
  getNombre():string{
    return this.nombre;
  }
  setPoder(poder:number):void{
    this.poder = poder;
  }
  getPoder():number{
    return this.poder;
  }
}
