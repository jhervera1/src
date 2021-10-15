import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { HeroeComponent } from './Heroes/Heroe/heroe.component';
import { ListadoComponent } from './Heroes/listado/listado.component';

@NgModule({
  declarations: [
    AppComponent, ContadorComponent, HeroeComponent, ListadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ListadoComponent]
})
export class AppModule { }
