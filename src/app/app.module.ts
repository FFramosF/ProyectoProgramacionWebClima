import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { from } from 'rxjs';
import { TextoArribaComponent } from './texto-arriba/texto-arriba.component';
import { CartaClimasComponent } from './carta-climas/carta-climas.component';

@NgModule({
  declarations: [
    AppComponent,
    TextoArribaComponent,
    CartaClimasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
