import { Component } from '@angular/core';

@Component({
  selector: 'contador-component',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})

export class ContadorComponent {

  title:string = 'Contador app';
  numero:number = 0;

  base: number = 5;


sumar1():void{
  this.numero+=1;
}
restar1():void{
  this.numero-=1;
}

calcular(numero:number):void{
  this.numero += numero;
}

}
