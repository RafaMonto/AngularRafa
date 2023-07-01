import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DadoComponent } from './dado/dado.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { JuegodadosComponent } from './juegodados/juegodados.component';

@NgModule({
  declarations: [
    AppComponent,
    DadoComponent,
    AcercadeComponent,
    JuegodadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
