import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import { Actor } from 'src/app/clases/actor';
import { BdPeliculasService } from 'src/app/servicios/bd-peliculas.service';
import { BdActoresService } from 'src/app/servicios/bd-actores.service';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent implements OnInit {
  /* Nombre;
  Tipo;
  FechaEstreno;
  CantidadPublico;
  FotoPelicula=null; */

  actorElegido;
  listadoActores: Actor[];
  constructor(private servicioPeliculas: BdPeliculasService,
              private servicioActores: BdActoresService) { }

  ngOnInit(): void {
    this.getData();
  }

  altaForm = new FormGroup({
    nombre: new FormControl('', [
      Validators.required
    ]),
    tipo: new FormControl('', [
      Validators.required
    ]),
    fecha: new FormControl('', [
      Validators.required
    ]),
    cantidad: new FormControl('', [
      Validators.required
    ]),
    actor: new FormControl('', [
      Validators.required
    ]),
    foto: new FormControl({value:'', disabled: true})
  });

/*
  nombreFormControl = new FormControl('', [
    Validators.required
  ]);

  tipoFormControl = new FormControl('', [
    Validators.required
  ]);
  fechaFormControl = new FormControl('', [
    Validators.required
  ]);
  cantFormControl = new FormControl('', [
    Validators.required
  ]);*/


  validar(){
    
  }

  getData(){
    this.servicioActores.getDatos().then((listado: any[])=>{
      this.listadoActores=listado;
    });

  }

  alta(){
    console.log(this.altaForm.value);
    //if(this.nombreFormControl.valid && this.tipoFormControl.valid && this.fechaFormControl.valid && this.cantFormControl.valid){
    if(this.altaForm.valid){  
      console.log("valido");
      let Nombre=this.altaForm.get('nombre').value;
      let Tipo=this.altaForm.get('tipo').value;
      let FechaEstreno=this.altaForm.get('fecha').value;
      let CantidadPublico=this.altaForm.get('cantidad').value;
      let FotoPelicula=null;
      let actor=this.altaForm.get('actor').value;

      console.log(Nombre,Tipo,FechaEstreno,CantidadPublico,FotoPelicula);
      this.servicioPeliculas.guardarDato(new Pelicula(Nombre,Tipo,FechaEstreno,CantidadPublico,actor,FotoPelicula));
    }
    else{
      this.altaForm.get('actor').markAllAsTouched();
    }
    
    

  }

  paisSeleccionado(nombre){
    console.log(nombre[0].id);
    this.altaForm.get('actor').setValue(nombre[0].id);
    console.log(this.altaForm.get('actor').value);

  }

  

}
