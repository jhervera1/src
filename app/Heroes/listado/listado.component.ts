import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})

export class ListadoComponent implements OnInit {

  heroes:string[] = ["Spoderman","Orin man", "Thortilla","Hush"];
  heroeBorrado:string = "";
  heroeGuardado:string = "";
  constructor() { }

  ngOnInit(): void {
  }

  borrarHeroe(heroe:string){

    this.heroes.forEach((element, index) =>{
      if(element === heroe){
        this.heroeBorrado = heroe;
        this.heroes.splice(index,1);
      }
    })
  }
  borrarPrimerUltimo(){
    let firstHero : string;
    let lastHero: string;

    firstHero = this.heroes[0];
    //lastHero = this.heroes[this.heroes.length];
    this.heroes.splice(0,1);
    //this.heroes.splice(this.heroes.length,1);
    this.heroeBorrado = firstHero;
  }

  guardarHeroe(heroe:string){
    this.heroeGuardado = heroe;
  }

}
