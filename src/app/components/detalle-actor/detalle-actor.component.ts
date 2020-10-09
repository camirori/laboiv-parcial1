import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-detalle-actor',
  templateUrl: './detalle-actor.component.html',
  styleUrls: ['./detalle-actor.component.css']
})
export class DetalleActorComponent implements OnInit {
  @Input() itemParaMostrar: Actor ;
  @Input() Borrado: boolean;
  @Output() deleteItemEvent = new EventEmitter<Actor>();
  @Output() limpiarItemEvent = new EventEmitter<Actor>();

  //fotoActual: string;
  anchoDeFoto: string;

  constructor() { 
    this.anchoDeFoto = '100%';
  }

  ngOnInit(): void {
  }

  LimpiarDetalle(){
    this.itemParaMostrar = null;
    // tslint:disable-next-line: no-console
    this.limpiarItemEvent.emit(undefined);
    console.info('objeto', this.itemParaMostrar);
  }

  

}
