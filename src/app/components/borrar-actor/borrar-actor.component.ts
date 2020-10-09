import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-borrar-actor',
  templateUrl: './borrar-actor.component.html',
  styleUrls: ['./borrar-actor.component.css']
})
export class BorrarActorComponent implements OnInit {
  @Input() itemParaMostrar: Actor ;
  @Output() deleteItemEvent = new EventEmitter<Actor>();

  constructor() { }

  ngOnInit(): void {
  }

  Borrar(){
    this.deleteItemEvent.emit(this.itemParaMostrar);
    console.log('Evento borrar');
    console.log(this.itemParaMostrar);
    this.itemParaMostrar=null;
  }

}
