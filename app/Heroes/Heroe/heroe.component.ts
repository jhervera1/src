import { Component } from '@angular/core';

@Component({
  selector: 'heroe-component',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css'],
})
export class HeroeComponent {
  nombre: string = 'Deadpool';
  edad: number = 22;

  constructor(){
    this.nombre.toUpperCase();
  }

  mayusculas(){
    return this.nombre.toUpperCase();
  }
  changeName() {
    this.nombre = 'Spoderman';
  }

  changeAge() {
    this.edad = 20;
  }

  concatNameAge() {
    return this.mayusculas() + this.edad;
  }
}
