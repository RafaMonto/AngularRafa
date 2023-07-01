import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LenguajesComponent } from './lenguajes/lenguajes.component';
import { WordComponent } from './word/word.component';
import { PowerpointComponent } from './powerpoint/powerpoint.component';
import { ExcelComponent } from './excel/excel.component';
import { PaintComponent } from './paint/paint.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LenguajesComponent,
    WordComponent,
    PowerpointComponent,
    ExcelComponent,
    PaintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
