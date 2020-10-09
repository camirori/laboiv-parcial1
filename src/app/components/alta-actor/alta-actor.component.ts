import { Component, OnInit } from '@angular/core';
import { BdActoresService } from 'src/app/servicios/bd-actores.service';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import { Actor } from 'src/app/clases/actor';
import { PaisesService } from 'src/app/servicios/paises.service';

@Component({
  selector: 'app-alta-actor',
  templateUrl: './alta-actor.component.html',
  styleUrls: ['./alta-actor.component.css']
})
export class AltaActorComponent implements OnInit {
  paisElegido;

  listadoPaises: Actor[];
  constructor(//private servicioPeliculas: BdPeliculasService,
              private servicioActores: BdActoresService,
              private servicio: PaisesService) { }

  ngOnInit(): void {
    this.getData();
  }

  altaForm = new FormGroup({
    nombre: new FormControl('', [
      Validators.required
    ]),
    apellido: new FormControl('', [
      Validators.required
    ]),
    sexo: new FormControl('', [
      Validators.required
    ]),
    fecha: new FormControl('', [
      Validators.required
    ]),
    pais: new FormControl('', [
      Validators.required
    ]),
    foto: new FormControl({value:'', disabled: true})
  });

  getData(){
    this.servicio.getPaises().subscribe((listado: any[])=>{
      this.listadoPaises=listado;
    });

  }

  alta(){
    console.log(this.altaForm.value);
    if(this.altaForm.valid){  
      console.log("valido");
      let Nombre=this.altaForm.get('nombre').value;
      let apellido=this.altaForm.get('apellido').value;
      let sexo=this.altaForm.get('sexo').value;
      let FechaNacimiento=this.altaForm.get('fecha').value;
      let Nacionalidad=this.altaForm.get('pais').value;
      let Foto=null;

      this.servicioActores.guardarDato(new Actor(Nombre,apellido,sexo,FechaNacimiento,Nacionalidad,Foto));
      this.altaForm.get('nombre').reset();
      this.altaForm.get('apellido').reset();
      this.altaForm.get('sexo').reset();
      this.altaForm.get('fecha').reset();
      this.altaForm.get('pais').reset();
    }
    else{
      this.altaForm.get('pais').markAllAsTouched();
    }

  }

  paisSeleccionado(nombre: string){
    this.altaForm.get('pais').setValue(nombre);
    console.log(this.altaForm.get('pais').value);

  }

}
