import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.css']
})
export class TablaActorComponent implements OnInit {
  @Input() listado: Actor[] ;
  @Output() itemSeleccionado: EventEmitter<any> = new EventEmitter<any>();
  @Input() mostrarAcciones: boolean;
  

  constructor() { }

  ngOnInit(): void {
  }

  Seleccionar(item: Actor, accion: string) {
    // tslint:disable-next-line: no-console
    console.info( ' mostrar detalles ', item);
    console.log('accion: '+accion)
    this.itemSeleccionado.emit([item,accion]);
  }

}
