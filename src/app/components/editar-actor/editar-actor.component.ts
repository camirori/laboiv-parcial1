import { Component, OnInit,Input } from '@angular/core';
import { BdActoresService } from 'src/app/servicios/bd-actores.service';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import { Actor } from 'src/app/clases/actor';
import { PaisesService } from 'src/app/servicios/paises.service';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {
  paisElegido;
  @Input() itemParaMostrar: Actor ;
  altaForm;


  listadoPaises: Actor[];
  constructor(//private servicioPeliculas: BdPeliculasService,
              private servicioActores: BdActoresService,
              private servicio: PaisesService) { }

  ngOnInit(): void {
    this.getData();
    this.altaForm = new FormGroup({
      nombre: new FormControl(this.itemParaMostrar.Nombre, [
        Validators.required
      ]),
      apellido: new FormControl(this.itemParaMostrar.apellido, [
        Validators.required
      ]),
      sexo: new FormControl(this.itemParaMostrar.sexo, [
        Validators.required
      ]),
      fecha: new FormControl(this.itemParaMostrar.FechaNacimiento, [
        Validators.required
      ]),
      pais: new FormControl(this.itemParaMostrar.Nacionalidad, [
        Validators.required
      ]),
      foto: new FormControl({value:'', disabled: true})
    });
  }

  

  getData(){
    this.servicio.getPaises().subscribe((listado: any[])=>{
      this.listadoPaises=listado;
    });

  }

  alta(){
    console.log(this.altaForm.value);
    if(this.altaForm.valid){  
      console.log("valido");
      this.itemParaMostrar.Nombre=this.altaForm.get('nombre').value;
      this.itemParaMostrar.apellido=this.altaForm.get('apellido').value;
      this.itemParaMostrar.sexo=this.altaForm.get('sexo').value;
      this.itemParaMostrar.FechaNacimiento=this.altaForm.get('fecha').value;
      this.itemParaMostrar.Nacionalidad=this.altaForm.get('pais').value;
      this.itemParaMostrar.Foto=null;

      this.servicioActores.editarDato(this.itemParaMostrar);
      this.altaForm.get('nombre').reset();
      this.altaForm.get('apellido').reset();
      this.altaForm.get('sexo').reset();
      this.altaForm.get('fecha').reset();
      this.altaForm.get('pais').reset();
      this.itemParaMostrar=null;
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

