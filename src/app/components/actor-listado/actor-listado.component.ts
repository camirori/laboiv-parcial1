import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { BdActoresService } from 'src/app/servicios/bd-actores.service';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.css']
})
export class ActorListadoComponent implements OnInit {
  listado: Actor[];
  item: Actor;
  accion: string;

  constructor(private servicio: BdActoresService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.servicio.getDatos().then((listado: any[])=>{
      this.listado=listado;
    });

  }

  mostrarDetalle(item){
    if(item){
      this.item=item[0];
      this.accion=item[1];      
    }else{
      this.item =undefined; 
      this.accion =undefined;     
    }


  }

  deleteItem(item){
    console.log(item.id)
    this.servicio.borrarDato(item.id);

    let nuevoListado=[];                              //modifico la ref para que se actualice el componente hijo
    this.servicio.getDatos().then((listado: any[])=>{
      nuevoListado=listado;
      this.listado=nuevoListado;
    });

    //this.usuarios=this.usuarios.filter(user=>user!=usuario);    

  }

}
