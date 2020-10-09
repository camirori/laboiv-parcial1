import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltaActorComponent } from '../components/alta-actor/alta-actor.component';
import { ActorListadoComponent } from '../components/actor-listado/actor-listado.component';
import { BienvenidoComponent } from '../components/bienvenido/bienvenido.component';
//import { BusquedaComponent } from '../components/busqueda/busqueda.component';
import { ErrorComponent } from '../components/error/error.component';
//import { PeliculaAltaComponent } from '../components/pelicula-alta/pelicula-alta.component';
//import { PeliculaListadoComponent } from '../components/pelicula-listado/pelicula-listado.component';

const routes: Routes = [
  {path: '', redirectTo: '/bienvenido', pathMatch: 'full'},
  {path: 'bienvenido', component: BienvenidoComponent},
  //{path: 'busqueda', component: BusquedaComponent},
  //{path: 'peliculas/alta', component: PeliculaAltaComponent},
  //{path: 'peliculas/listado', component: PeliculaListadoComponent},
  {path: 'actor/alta', component: AltaActorComponent},
  {path: 'actor/listado', component: ActorListadoComponent},
  {path: '**', component: ErrorComponent},		//wild card
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
