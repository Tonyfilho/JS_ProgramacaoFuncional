import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FuncoesPurasComponent } from './funcoes-puras/funcoes-puras.component';
import { MapComponent } from './exercios/map/map.component';
import { ImutabilidadeComSpreadComponent } from './imutabilidade-com-spread/imutabilidade-com-spread.component';

@NgModule({
  declarations: [
    AppComponent,
    FuncoesPurasComponent,
    MapComponent,
    ImutabilidadeComSpreadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
