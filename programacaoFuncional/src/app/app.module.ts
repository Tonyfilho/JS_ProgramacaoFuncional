import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FuncoesPurasComponent } from './funcoes-puras/funcoes-puras.component';

@NgModule({
  declarations: [
    AppComponent,
    FuncoesPurasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
