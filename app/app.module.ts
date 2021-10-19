import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ContadorModule } from "./contador/contador.module";
import { DbzModule } from "./dbz/dbz.module";
import { MainPageComponent } from "./dbz/main-page/main-page.component";
import { HeroesModule } from "./Heroes/heroes.module";
import { ListadoComponent } from "./Heroes/listado/listado.component";

@NgModule({

  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    ContadorModule,
    HeroesModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [
    MainPageComponent
  ],
})
export class AppModule {}
