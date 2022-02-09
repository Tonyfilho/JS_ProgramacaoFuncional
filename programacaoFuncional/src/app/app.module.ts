import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FuncoesPurasComponent } from './funcoes-puras/funcoes-puras.component';
import { MapComponent } from './exercios/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    FuncoesPurasComponent,
    MapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
