export class Personaje{
   nombre:string = "";
   poder:number = 0;

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
