import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes:string[] = ["Spoderman","Orin man", "Thortilla","Hush"];


  constructor() { }

  ngOnInit(): void {
  }

}
