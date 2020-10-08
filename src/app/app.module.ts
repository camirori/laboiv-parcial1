import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FirebaseModule} from './modulos/firebase/firebase.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './modulos/app-routing.module';
import { AppComponent } from './app.component';
import { AltaActorComponent } from './components/alta-actor/alta-actor.component';
import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component';
import { MenuComponent } from './components/menu/menu.component';
import { ErrorComponent } from './components/error/error.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';

import { BdActoresService } from './servicios/bd-actores.service';
import { PaisesService } from './servicios/paises.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AltaActorComponent,
    TablaPaisesComponent,
    MenuComponent,
    ErrorComponent,
    BienvenidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirebaseModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BdActoresService,PaisesService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
